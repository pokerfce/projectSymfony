<?php

namespace App\Controller\RankFour;

use App\Services\FileUploader;
use App\Form\ProfileEdit;
use App\Entity\User;
use App\Entity\Certifications;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use Symfony\Component\Form\Extension\Core\Type\{PasswordType, TextType, EmailType, SubmitType};
use Symfony\Component\Validator\Constraints\Length;


class AccountController extends AbstractController {

    public function __construct(TokenStorageInterface $tokenStorage) {
        $this->user = $tokenStorage->getToken()->getUser();
    }

    /**
     * @Route("/account/certifications/add/{id}", name="enroll_add", methods={"GET"})
     */
    public function enroll(Certifications $certification): Response {

        if (!$this->user->getCertifications()->contains($certification)) {
            $this->user->addCertification($certification);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($this->user);
            $entityManager->flush();
        }
        
        return $this->redirectToRoute('user_attempts', ['id' =>  $certification->getId() ]);
    }

        /**
     * @Route("/account/certifications/remove/{id}", name="enroll_remove", methods={"GET"})
     */
    public function unenroll(Certifications $certification, Request $request): Response {

        if ($this->user->getCertifications()->contains($certification)) {
            $this->user->removeCertification($certification);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($this->user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('index', ['page' =>  $request->query->getInt('page', 1) ]);
    }

    /**
     * @Route("/profile", name="user_certifs")
     */
    public function user_certifs() {
        return $this->renderIfPossible('@user/profile/certifications.html.twig', $this->user->getUsername());
    }

    /**
     * @Route("/profile/certifications/{id}", name="user_attempts")
     */
    public function user_attempts(Certifications $certification) {

        if ($this->user->getCertifications()->contains($certification)) {
            return $this->render('@user/profile/attempts.html.twig',
                array('certif' => $certification)
            );
        } else {
            return $this->redirectToRoute('user_certifs');
        }
    }

    /**
     * @Route("/account/info", name="account_information")
     */
    public function account_info(Request $request, FileUploader $fileUploader) {
        $oldFileName = $this->user->getAvatar();

        $form = $this->createForm(ProfileEdit::class, $this->user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $file = $form->get('avatar_path')->getData();

            // this condition is needed because the 'brochure' field is not required
            // so the IMAGE file must be processed only when a file is uploaded
            if ($file != null) {
                $fileName = $fileUploader->upload($file, "avatar");
                $this->user->setAvatarPath($fileName);
            } else {
                $this->user->setAvatarPath($oldFileName);
            }

            $em = $this->getDoctrine()->getManager();
            $em->persist($this->user);
            $em->flush();

            $this->addFlash('success', 'You have been successfully changed your information.');
        }

        return $this->render('@user/account/information.html.twig',
            array('form' => $form->createView())
        );
    }

    /**
     * @Route("/account/settings", name="account_settings")
     */
    public function account_settings(Request $request) {
        $user = new User();

        $form = $this->createFormBuilder($user)
                ->add('username', TextType::class)
                ->add('email', EmailType::class)
                ->add('submit', SubmitType::class)
            ->getForm();

        // if ($request->isMethod('POST')) {
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $valid = true;

                if ($form->get('username')->isValid()) {
                    $this->user->setUsername($user->getUsername());
                } elseif ($this->user->getUsername() != $user->getUsername()) {
                    $valid = false;
                    $this->addFlash('usernameError', 'This username is already taken.');
                }

                if ($form->get('email')->isValid()) {
                    $this->user->setEmail($user->getEmail());
                } elseif ($this->user->getEmail() != $user->getEmail()) {
                    $valid = false;
                    $this->addFlash('emailError', 'This email is already taken.');
                }

                if ($valid) {
                    $em = $this->getDoctrine()->getManager();
                    $em->persist($this->user);
                    $em->flush();

                    $this->addFlash('success', 'You have been successfully changed your settings.');
                }

            }
        // }


        return $this->render('@user/account/settings.html.twig',
            array('form' => $form->createView())
        );
    }

    /**
     * @Route("/account/password", name="account_password")
     */
    public function account_password(Request $request, UserPasswordEncoderInterface $passwordEncoder, TokenStorageInterface $tokenStorage) {
        $form = $this->createFormBuilder()
            ->add('old_password', PasswordType::class)
            ->add('new_password', PasswordType::class, array(
                'constraints' => new Length(['min' => 6])
            ))
            ->add('submit', SubmitType::class)
        ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            if ($passwordEncoder->isPasswordValid($this->user, $data['old_password'])) {

                $this->user->setPassword($passwordEncoder->encodePassword($this->user, $data['new_password']));
                $em = $this->getDoctrine()->getManager();
                $em->persist($this->user);
                $em->flush();

                $token = new UsernamePasswordToken($this->user, $this->user->getPassword(), 'main', $this->user->getRoles());
                $tokenStorage->setToken($token);

                $this->addFlash('success', 'You have been successfully changed your password.');
            } else {
                $this->addFlash('errorOld', 'Incorrect password. Try Again.');
            }
        }

        return $this->render('@user/account/password.html.twig',
            array('form' => $form->createView())
        );
    }


    public function renderIfPossible($url, $name) {
        if ($name == $this->user->getUsername()) {
            return $this->render($url, ["unknown" => $this->user]);
        } else {
            $result = $this->getDoctrine()->getRepository(User::class)->loadUserByUsername($name);
            if (is_null($result)) {
                return $this->redirectToRoute('index');
            }
            return $this->render($url, ["unknown" => $result]);
        }
    }
}
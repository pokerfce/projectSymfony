<?php

namespace App\Form;

use App\Entity\Providers;
use App\Entity\Certifications;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\{FileType, TextType, TextareaType};
use Symfony\Component\Validator\Constraints\File;

class CertificationsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('thumbnail_path', FileType::class, [
                'data_class' => null,
                'label' => 'Thumbnail',
                // make it optional so you don't have to re-upload the PDF file
                // every time you edit the Product details
                'required' => false,
                // unmapped fields can't define their validation using annotations
                // in the associated entity, so you can use the PHP constraint classes
                'constraints' => [
                    new File([
                        'mimeTypes' => [
                            'image/png',
                            'image/jpeg',
                            'image/jpg'
                        ],
                        'mimeTypesMessage' => 'Please upload a valid image.',
                    ])
                ]
            ])
            ->add('title', TextType::class)
            ->add('provider', EntityType::class,
                array(
                    'class' => Providers::class,
                    'choice_label' => 'name',
                )
            )
            ->add('description', TextareaType::class, [
            'attr' => [
                'rows' => '10'
            ]])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Certifications::class,
        ]);
    }
}

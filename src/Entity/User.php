<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

use DateTime;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="user")
 * @UniqueEntity(fields="email", message="This email is already taken.")
 * @UniqueEntity(fields="username", message="This username is already taken.")
 * @ORM\HasLifecycleCallbacks()
 */
class User implements UserInterface, \Serializable
{
    /**
     * @var int
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(type="string", unique=true)
     * @Assert\NotBlank(message = "This field is required.")
     */
    private $username;

    /**
     * @var string
     *
     * @ORM\Column(type="string", unique=true)
     * @Assert\NotBlank(message = "This field is required.")
     * @Assert\Email(message = "Choose a valid email.")
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(type="string")
     * @Assert\NotBlank(message = "This field is required.")
     */
    private $password;

    /**
     * @var array
     *
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var Datetime
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $last_login;

    /**
     * @var Datetime
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $created_at;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isBanned = false;

    /**
     * @ORM\Column(type="string", length=100))
     */
    private $avatar_path = "imgs/avatars/default1.png";

    /**
     * @ORM\Column(type="string", length=125)
     */
    private $biography = "";

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $specialty = "";

    /**
     * @ORM\ManyToMany(targetEntity=Category::class)
     */
    private $selected_tags;

    public function __construct()
    {
        $this->selected_tags = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): void
    {
        $this->username = $username;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): void
    {
        $this->password = $password;
    }

    public function getRoles(): array
    {
        $roles = $this->roles;

        if (empty($roles)) {
            $roles[] = 'ROLE_USER';
        }

        return array_unique($roles);
    }

    public function setRoles(array $roles): void
    {
        $this->roles = $roles;
    }

    public function getSalt(): ?string
    {
        return null;
    }

    public function eraseCredentials(): void
    {
        //
    }

    public function serialize(): string
    {
        return serialize([$this->id, $this->username, $this->password]);
    }

    public function unserialize($serialized): void
    {
        [$this->id, $this->username, $this->password] = unserialize($serialized, ['allowed_classes' => false]);
    }

    public function getLastLogin()
    {
        return $this->last_login;
    }

    public function setLastLogin($last_login): void
    {
        $this->last_login = $last_login;
    }

    public function getCreatedAt(): Datetime
    {
        return $this->created_at;
    }

    public function setCreatedAt(Datetime $created_at = null): void
    {
        $this->created_at = $created_at;
    }

    public function getIsBanned(): ?bool
    {
        return $this->isBanned;
    }

    public function setIsBanned(bool $isBanned): self
    {
        $this->isBanned = $isBanned;

        return $this;
    }

    public function getAvatarPath(): ?string
    {
        return $this->avatar_path;
    }

    public function setAvatarPath(string $avatar_path): self
    {
        $this->avatar_path = $avatar_path;

        return $this;
    }

    public function getBiography(): ?string
    {
        return $this->biography;
    }

    public function setBiography(string $biography): self
    {
        $this->biography = $biography;

        return $this;
    }

    public function getSpecialty(): ?string
    {
        return $this->specialty;
    }

    public function setSpecialty(string $specialty): self
    {
        $this->specialty = $specialty;

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getSelectedTags(): Collection
    {
        return $this->selected_tags;
    }

    public function addSelectedTag(Category $selectedTag): self
    {
        if (!$this->selected_tags->contains($selectedTag)) {
            $this->selected_tags[] = $selectedTag;
        }

        return $this;
    }

    public function removeSelectedTag(Category $selectedTag): self
    {
        $this->selected_tags->removeElement($selectedTag);

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function onPrePersist(){
        $this->created_at = new Datetime();
    }
}
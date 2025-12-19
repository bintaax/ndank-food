<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategoryFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $categories = [
            'Plats',
            'Snacks',
            'Boissons',
        ];

        foreach ($categories as $name) {
            $category = new Category();
            $category->setName($name);
            $category->setSlug(strtolower($name));

            $manager->persist($category);
        }

        $manager->flush();
    }
}

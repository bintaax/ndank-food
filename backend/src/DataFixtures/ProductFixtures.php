<?php

namespace App\DataFixtures;

use App\Entity\Product;
use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ProductFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $data = [
            'plats' => [
                ['Thiéboudienne', 'Riz au poisson traditionnel sénégalais', 12.50, 'thieboudienne.jpg'],
                ['Yassa Poulet', 'Poulet mariné au citron et oignons', 11.00, 'yassa-poulet.jpg'],
                ['Mafé', 'Sauce onctueuse à la pâte d’arachide', 11.50, 'mafe.jpeg'],
                ['Vermicelles', 'Cheveux d\'ange accompagné d\'une sauce oignon et poulet', 11.50, 'vermicelles.jpg'],
            ],
            'snacks' => [
                ['Pastels', 'Beignets farcis au poisson', 5.00, 'pastels.jpg'],
                ['Beignets', 'Beignets maison moelleux et dorés', 4.00, 'beignets.webp'],
                ['Croquettes', 'Croquettes croustillantes faites maison', 4.50, 'croquettes.jpg'],
            ],
            'boissons' => [
                ['Bissap', 'Boisson hibiscus maison', 2.50, 'bissap.jpg'],
                ['Gingembre', 'Jus de gingembre frais', 2.50, 'gingembre.jpg'],
                ['Bouye', 'Jus de fruit du baobab', 3.00, 'bouye.jpg'],
                ['Thiakry / Dégué', 'Couscous de mil et yaourt', 3.00, 'thiakry.webp'],
            ],
        ];

        foreach ($data as $slug => $products) {
            $category = $manager->getRepository(Category::class)
                ->findOneBy(['slug' => $slug]);

            foreach ($products as [$name, $desc, $price, $image]) {
                $product = new Product();
                $product->setName($name);
                $product->setDescription($desc);
                $product->setPrice($price);
                $product->setAvailable(true);
                $product->setImage('uploads/products/' . $image);
                $product->setCategory($category);

                $manager->persist($product);
            }
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            CategoryFixtures::class,
        ];
    }
}

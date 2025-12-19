<?php

namespace App\Repository;

use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Product>
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Product::class);
    }
    public function findByCategorySlug(string $slug): array
{
    return $this->createQueryBuilder('p')
        ->join('p.category', 'c')
        ->where('c.slug = :slug')
        ->setParameter('slug', $slug)
        ->getQuery()
        ->getResult();
}

}

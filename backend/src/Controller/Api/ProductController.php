<?php

namespace App\Controller\Api;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/products', name: 'api_products_')]
class ProductController extends AbstractController
{
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(ProductRepository $productRepository, Request $request): JsonResponse
    {
        $categorySlug = $request->query->get('category');

        if ($categorySlug) {
            $products = $productRepository->findByCategorySlug($categorySlug);
        } else {
            $products = $productRepository->findAll();
        }

        $data = [];

        foreach ($products as $product) {
            $data[] = [
                'id' => $product->getId(),
                'name' => $product->getName(),
                'description' => $product->getDescription(),
                'price' => $product->getPrice(),
                'image' => $product->getImage(),
                'category' => $product->getCategory()->getName(),
            ];
        }

        return $this->json($data);
    }
}

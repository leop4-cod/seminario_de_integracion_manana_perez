// src/application/use-cases/category.use-case.ts
import type { CategoryRepository } from '@/domain/ports/category.repository'
import type { Category } from '@/domain/entities/category.entity'

export class CategoryUseCase {
  categoryRepository: CategoryRepository

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  getCategories(): Promise<Category[]> {
    return this.categoryRepository.getCategories()
  }
}
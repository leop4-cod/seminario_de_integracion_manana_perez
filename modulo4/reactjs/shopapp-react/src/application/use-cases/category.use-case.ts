// src/application/use-cases/category.use-case.ts
import type { CategoryRepository } from '@/domain/ports/category.repository'
import type { Category } from '@/domain/entities/category.entity'
import type { CategoryStats } from '@/domain/entities/category-stats.entity'
import type { UpdateCategoryDto } from '../dtos/update-category.dto'
import type { CreateCategoryDto } from '../dtos/create-category.dto'

export class CategoryUseCase {
  categoryRepository: CategoryRepository

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  getCategories(): Promise<Category[]> {
    return this.categoryRepository.getCategories()
  }

  createCategory(dto: CreateCategoryDto): Promise<Category> {
    return this.categoryRepository.createCategory(dto)
  }

  updateCategory(id: number, dto: UpdateCategoryDto): Promise<Category> {
    return this.categoryRepository.updateCategory(id, dto)
  }

  deleteCategory(id: number): Promise<void> {
    return this.categoryRepository.deleteCategory(id)
  }
  
  getStats(): Promise<CategoryStats> {
  return this.categoryRepository.getStats()
}
}
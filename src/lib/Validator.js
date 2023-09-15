import { z } from 'zod'

const birthdateSchema = z.object({
  month: z
    .string()
    .min(1, 'month is required')
    .refine((month) => {
      const monthNumber = parseInt(month, 10)
      return monthNumber >= 1 && monthNumber <= 12
    }),
  day: z
    .string()
    .min(1, 'day is required')
    .refine(
      (day) => {
        const dayNumber = parseInt(day, 10)
        return dayNumber >= 1 && dayNumber <= 31
      },
      { message: 'day should be between 1 and 31' }
    ),
  year: z
    .string()
    .min(1, 'year is required')
    .refine(
      (year) => {
        const yearNumber = parseInt(year, 10)
        return yearNumber >= 1933 && yearNumber <= 2023
      },
      { message: 'year should be between 1933 and 2023' }
    ),
})

export function validateBirthdate(birthDate) {
  try {
    birthdateSchema.parse(birthDate)
    return {}
  } catch (e) {
    const errorMessages = e.errors.map((error) => error.message)
    return errorMessages
  }
}

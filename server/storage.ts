import { db } from "./db";
import {
  inquiries,
  brands,
  type InsertInquiry,
  type InsertBrand,
  type Inquiry,
  type Brand
} from "@shared/schema";

export interface IStorage {
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // Brands
  getBrands(): Promise<Brand[]>;
  createBrand(brand: InsertBrand): Promise<Brand>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async getBrands(): Promise<Brand[]> {
    return await db.select().from(brands);
  }

  async createBrand(insertBrand: InsertBrand): Promise<Brand> {
    const [brand] = await db.insert(brands).values(insertBrand).returning();
    return brand;
  }
}

export const storage = new DatabaseStorage();

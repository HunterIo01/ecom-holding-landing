import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Brands List
  app.get(api.brands.list.path, async (req, res) => {
    const brands = await storage.getBrands();
    res.json(brands);
  });

  // Create Inquiry
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data (if empty)
  const existingBrands = await storage.getBrands();
  if (existingBrands.length === 0) {
    await storage.createBrand({
      name: "CTRL Recovery®",
      description: "Equipamiento premium de recuperación física: frío, calor y compresión para atletas exigentes.",
      imageUrl: "/ctrl-recovery.png",
      websiteUrl: "https://ctrlrecovery.com/en"
    });
    await storage.createBrand({
      name: "Apex Gear",
      description: "Ropa deportiva de alto rendimiento disenada para resistencia y estilo.",
      imageUrl: "https://images.unsplash.com/photo-1517466116634-9f717c78457e?q=80&w=2074&auto=format&fit=crop",
      websiteUrl: "#"
    });
    await storage.createBrand({
      name: "Velvet & Vine",
      description: "Accesorios de vino de lujo curados y colecciones aprobadas por sommeliers.",
      imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
      websiteUrl: "#"
    });
    console.log("Seeded database with initial brands.");
  }

  return httpServer;
}

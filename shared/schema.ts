import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  image_data: text("image_data").notNull(), // base64 encoded image
  latitude: text("latitude").notNull(),
  longitude: text("longitude").notNull(),
});

export const insertLocationSchema = createInsertSchema(locations).pick({
  name: true,
  category: true,
  description: true,
  image_data: true,
  latitude: true,
  longitude: true,
});

export type InsertLocation = z.infer<typeof insertLocationSchema>;
export type Location = typeof locations.$inferSelect;
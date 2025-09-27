import { openDatabaseAsync, SQLiteDatabase } from "expo-sqlite";

export class DatabaseManager {
    private static instance: SQLiteDatabase | null = null;
    private static connectionPromise: Promise<SQLiteDatabase> | null = null;

    private static async initializeConnection(): Promise<SQLiteDatabase> {
        console.log("[Database] Opening database connection...");
        const db = await openDatabaseAsync("journey.app.db");
        
        console.log("[Database] Database initialized successfully");
        return db;
    }

    static async getConnection(): Promise<SQLiteDatabase> {
        if (this.instance) {
            return this.instance;
        }

        if (this.connectionPromise) {
            return this.connectionPromise;
        }

        this.connectionPromise = this.initializeConnection();
        
        try {
            this.instance = await this.connectionPromise;
            return this.instance;
        } catch (error) {
            this.connectionPromise = null;
            throw error;
        }
    }

    static async closeConnection(): Promise<void> {
        if (this.instance) {
            await this.instance.closeAsync();
            this.instance = null;
            this.connectionPromise = null;
        }
    }
}
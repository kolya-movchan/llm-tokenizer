const isDev = import.meta.env.DEV;

type LogLevel = "info" | "warn" | "error" | "debug";

class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(
    level: LogLevel,
    message: string,
    ...args: any[]
  ): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  public log(message: string, ...args: any[]): void {
    if (isDev) {
      console.log(this.formatMessage("info", message), ...args);
    }
  }

  public warn(message: string, ...args: any[]): void {
    if (isDev) {
      console.warn(this.formatMessage("warn", message), ...args);
    }
  }

  public error(message: string, ...args: any[]): void {
    if (isDev) {
      console.error(this.formatMessage("error", message), ...args);
    }
  }

  public debug(message: string, ...args: any[]): void {
    if (isDev) {
      console.debug(this.formatMessage("debug", message), ...args);
    }
  }
}

export const logger = Logger.getInstance();

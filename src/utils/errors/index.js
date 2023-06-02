export const errorType = {
  connection: "connection",
  client: "client",
  service: "service",
  unknown: "unknown",
};

export const errorData = {
  400: { type: errorType.client, message: "Bad Request" },
  401: { type: errorType.client, message: "Unauthorized" },
  403: { type: errorType.client, message: "Access Denied" },
  404: { type: errorType.client, message: "Not Found" },
  429: { type: errorType.client, message: "Too Many Requests" },
  500: { type: errorType.service, message: "Internal Server Error" },
  502: { type: errorType.service, message: "Bad Gateway" },
  503: { type: errorType.service, message: "Service Unavailable" },
  504: { type: errorType.service, message: "Gateway Timeout" },
};

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message, statusCode);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

class ConnectionError extends CustomError {}

class ClientError extends CustomError {}

class ServiceError extends CustomError {}

export class ErrorFactory {
  static createError(type, message, statusCode) {
    switch (type) {
      case "connection":
        return new ConnectionError(message, statusCode);
      case "client":
        return new ClientError(message, statusCode);
      case "service":
        return new ServiceError(message, statusCode);
      default:
        return new CustomError(message, statusCode);
    }
  }
}

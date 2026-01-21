// Write your code below

class CustomError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  try {
    // Code that might throw a CustomError
    throw new CustomError('Something went wrong!');
  } 
  
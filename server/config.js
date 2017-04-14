exports.DATABASE_URL = process.env.DATABASE_URL || 
global.DATABASE_URL || `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds161580.mlab.com:61580/cheeselistdb` 
|| 'mongodb://localhost/cheeseListDb';


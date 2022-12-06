module.exports = {
    multipleMongooseToObj: function (mongooseArray) {
        return mongooseArray.map(mongoose => mongoose.toObject());
    },
    mongooseToObj: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};
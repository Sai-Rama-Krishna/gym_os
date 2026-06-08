# MongoDB Schema Design

Detailed Mongoose schema definitions based on the database design.

## `User` Schema
```javascript
{
  _id: ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'GymOwner', 'Trainer', 'Member'], required: true },
  createdAt: Date,
  updatedAt: Date
}
```

## `Gym` Schema
```javascript
{
  _id: ObjectId,
  ownerId: { type: ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  },
  address: String,
  facilities: [String],
  images: [String], // URLs from Cloudinary
  isActive: { type: Boolean, default: false },
  createdAt: Date,
  updatedAt: Date
}
```

## `Equipment` Schema
```javascript
{
  _id: ObjectId,
  gymId: { type: ObjectId, ref: 'Gym', required: true },
  name: { type: String, required: true },
  category: { type: String, enum: ['Cardio', 'Machine', 'Free Weight', 'Other'] },
  quantity: { type: Number, default: 1 },
  image: String
}
```

## `Plan` Schema (Membership Options)
```javascript
{
  _id: ObjectId,
  gymId: { type: ObjectId, ref: 'Gym', required: true },
  name: { type: String, required: true }, // e.g., "Monthly Basic"
  durationDays: { type: Number, required: true },
  price: { type: Number, required: true },
  features: [String],
  isActive: { type: Boolean, default: true }
}
```

## `Membership` Schema (Active Subscriptions)
```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: 'User', required: true },
  gymId: { type: ObjectId, ref: 'Gym', required: true },
  planId: { type: ObjectId, ref: 'Plan', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ['Active', 'Expired', 'Cancelled'] }
}
```

## `Attendance` Schema
```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: 'User', required: true },
  gymId: { type: ObjectId, ref: 'Gym', required: true },
  checkInAt: { type: Date, default: Date.now },
  checkOutAt: Date // Optional for now
}
```

## `TrainerRequest` Schema
```javascript
{
  _id: ObjectId,
  memberId: { type: ObjectId, ref: 'User', required: true },
  gymId: { type: ObjectId, ref: 'Gym', required: true },
  trainerId: { type: ObjectId, ref: 'User' }, // Assigned trainer
  status: { type: String, enum: ['Pending', 'Accepted', 'Completed'], default: 'Pending' },
  requestedAt: { type: Date, default: Date.now },
  completedAt: Date
}
```

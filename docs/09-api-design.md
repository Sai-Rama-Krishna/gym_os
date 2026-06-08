# API Design

RESTful API structure for the Node.js + Express backend.

## Base URL
`/api/v1`

## 1. Authentication
* `POST /auth/register` - Register a new user.
* `POST /auth/login` - Authenticate user and get JWT.
* `POST /auth/forgot-password` - Request password reset.
* `GET /auth/me` - Get current user profile.

## 2. Users
* `GET /users` - List users (Admin).
* `GET /users/:id` - Get user details.
* `PUT /users/:id` - Update user profile.

## 3. Gyms
* `GET /gyms` - Search/List gyms (supports geospatial query params).
* `POST /gyms` - Create a new gym (Gym Owner).
* `GET /gyms/:id` - Get gym details.
* `PUT /gyms/:id` - Update gym info.
* `DELETE /gyms/:id` - Delete/Deactivate gym.

## 4. Equipment
* `GET /gyms/:gymId/equipment` - Get equipment list for a gym.
* `POST /gyms/:gymId/equipment` - Add equipment (Gym Owner).
* `PUT /equipment/:id` - Update equipment.
* `DELETE /equipment/:id` - Remove equipment.

## 5. Memberships & Plans
* `GET /gyms/:gymId/plans` - List available plans for a gym.
* `POST /gyms/:gymId/plans` - Create a new plan (Gym Owner).
* `POST /memberships` - Subscribe to a plan (Member).
* `GET /memberships/my-plans` - Get current user's active memberships.

## 6. Attendance
* `POST /attendance/checkin` - Record QR check-in.
* `GET /gyms/:gymId/attendance` - Get attendance logs (Gym Owner).
* `GET /gyms/:gymId/occupancy` - Get current live occupancy/crowd level.

## 7. Workouts
* `POST /workouts/generate` - Generate rule-based workout plan.
* `GET /workouts/my-plan` - Get current user's active workout plan.

## 8. Trainer Assistance
* `POST /trainer-requests` - Request help from a trainer (Member).
* `GET /trainer-requests` - List active requests for a gym (Trainer).
* `PUT /trainer-requests/:id` - Update request status (Accept/Complete).

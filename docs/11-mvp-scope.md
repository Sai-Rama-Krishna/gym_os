# MVP Scope

This document defines the boundaries of the Minimum Viable Product (MVP) to ensure rapid development and time-to-market.

## In Scope (MVP)

1. **Authentication:** Email/Password based login and registration. Basic role assignment.
2. **Gym Management:** Create gym profiles, add basic details, locations, and photos.
3. **Equipment Inventory:** Simple CRUD operations for gym equipment lists with generic categories.
4. **Gym Discovery:** Search by name or basic location matching. View gym profiles.
5. **Membership Management:** Create static pricing plans. Manual or basic automated subscription tracking (without complex recurring billing logic initially).
6. **QR Attendance:** Basic QR generation and scanning to log an entry timestamp.
7. **Workout Plans:** Static, rule-based workout plan generation based on basic user goals and gym equipment tags.
8. **Basic Analytics:** Simple counters for gym owners (total members, total check-ins today).

## Out of Scope (Post-MVP / Future Phases)

1. **Advanced AI Features:** AI Posture Analysis, AI Form Correction (MediaPipe integration).
2. **Complex Payments:** Fully automated recurring billing, platform fee splitting, integrated accounting (Razorpay integration deferred to Phase 2).
3. **Advanced Smart Workouts:** Machine learning based adaptive workout generation.
4. **Multi-Language Support:** English only for MVP. Telugu, Hindi, etc., planned for later.
5. **Music Queue System:** Excluded.
6. **Advanced Occupancy Forecasting:** Predictive crowd tracking (MVP will only have basic current headcounts).
7. **Trainer Features:** Trainer help button and trainer-specific dashboards are pushed to Phase 2.
8. **In-App Messaging/Chat:** Not included in MVP.

## Technical Constraints for MVP
* **Platform:** React Native (iOS/Android) sharing single codebase.
* **Backend:** Node.js + Express monolithic API.
* **Database:** MongoDB Atlas (single cluster).
* **Storage:** Cloudinary for basic image hosting.

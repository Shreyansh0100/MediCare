 MediCare – Healthcare Appointment Booking System

MediCare is a full-stack web application that simplifies the process of booking doctor appointments and managing healthcare schedules. It connects patients, doctors, and administrators in one platform with a smooth and practical workflow.

What this project does
MediCare allows users to register as patients and browse a list of available doctors. Patients can view doctor profiles, choose a suitable date and time, and book appointments instantly. Payments for appointments are handled using Razorpay (test mode).
On the other side, doctors and admins have dedicated dashboards to manage everything efficiently.

Patient (Frontend)
Create an account and log in securely
View list of available doctors with details
Select a doctor and book an appointment
Choose specific date and time slot
Make payment using Razorpay (test mode)
View and manage booked appointments

 Admin Panel
Admin has full control over the system:

Admin login system
Add and manage doctors
View all appointments and booking history
Monitor system activity


Doctor Panel
Each doctor has a personal dashboard where they can:

View all their appointments
See total earnings
Manage their schedule
Mark themselves as unavailable when on leave


Tech Stack:
Frontend: React.js, Vite, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Auth: JWT Authentication
Payments: Razorpay (test mode)
File Uploads: Multer + Cloudinary


Core Features:
Role-based access (Patient / Doctor / Admin)
Secure authentication system
Appointment booking with time slots
Payment integration
Doctor availability management
Admin control dashboard
Real-time structured data flow between all roles

Project Structure
MediCare/
├── frontend   → Patient UI
├── Admin      → Admin + Doctor dashboards
├── Backend    → API server (Express + MongoDB)


Getting Started

Clone repo

git clone https://github.com/Shreyansh0100/MediCare.git
cd MediCare

Install dependencies
1. Backend:

cd Backend
npm install
npm run dev

2. Frontend:

cd frontend
npm install
npm run dev

3. Admin Panel:

cd Admin
npm install
npm run dev
 
 
 
 
Goal of this project

The goal of MediCare is to simulate a real-world hospital appointment system where users can book doctors easily, doctors can manage their schedule, and admins can control the entire platform — all in one unified system.

 Author

Shreyansh Singh
GitHub: Shreyansh0100


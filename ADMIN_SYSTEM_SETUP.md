# NestVibe Admin System Setup Guide

## 🎯 Overview

A complete role-based access control system has been implemented with three user types:
- **Admin**: Full access to manage properties and view all form submissions
- **Agent**: (Role available but not yet utilized - can be expanded)
- **User**: Read-only access to browse properties

---

## 🚀 Key Features Implemented

### 1. **Authentication & Authorization**
- ✅ JWT-based token system with role included
- ✅ Role field added to User model (admin, agent, user)
- ✅ Login/Register endpoints updated to include role in token
- ✅ Auth verification middleware created

### 2. **Admin Dashboard** (`/admin`)
- ✅ Properties Management: Create, Read, Update, Delete
- ✅ Form Submissions Viewer: See all leads/contact form entries
- ✅ Admin-only protection: Non-admins redirected to `/dashboard`
- ✅ Logout functionality
- ✅ Tabbed interface (Properties & Forms tabs)

### 3. **User Dashboard** (`/dashboard`)
- ✅ Read-only property browsing
- ✅ Search functionality by title/location
- ✅ Property filtering and display
- ✅ User-specific welcome message
- ✅ Access denied for non-authenticated users

### 4. **API Security**
- ✅ Admin-only routes protected
- ✅ Property management (POST/PUT/DELETE) requires admin role
- ✅ Forms API (GET) requires admin role
- ✅ Public property browsing allowed for all users

---

## 📁 Modified & New Files

### Core Authentication
- `app/api/auth/login/route.js` - Updated to include role in JWT
- `app/api/auth/register/route.js` - Updated to include role in JWT
- `app/api/auth/me/route.js` - Updated to return role

### API Routes
- `app/api/properties/route.js` - Updated to check admin role
- `app/api/properties/[id]/route.js` - Updated to check admin role
- `app/api/leads/route.js` - Added admin-only GET protection

### Pages
- `app/admin/page.jsx` - **COMPLETELY REWRITTEN** with:
  - Admin auth check with redirect
  - Properties management tab
  - Forms submissions tab
  - Logout button
  
- `app/dashboard/page.jsx` - **NEW** User dashboard with:
  - User authentication check
  - Admin redirect logic
  - Property browsing
  - Search functionality

### Auth Page
- `app/auth/page.jsx` - Updated to redirect based on role:
  - Admins → `/admin`
  - Users → `/dashboard`

### Utilities
- `lib/authMiddleware.js` - **NEW** Helper functions for:
  - `verifyToken()` - Verify JWT validity
  - `requireAdmin()` - Check admin status
  - `requireAuth()` - Check authentication
  
- `lib/withAuth.jsx` - **NEW** React HOCs for page protection:
  - `withAdminAuth()` - Wrap components that need admin access
  - `withUserAuth()` - Wrap components that need user access

---

## 🔧 Setup Instructions

### 1. **Making a User an Admin**

Currently, users register as "user" by default. To make someone an admin, you need to:

#### Option A: Direct Database Update (MongoDB)
```javascript
// In MongoDB compass or via MongoDB shell:
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
```

#### Option B: Create Admin API Endpoint (Recommended)
Add this endpoint to manage admin assignments:

```javascript
// app/api/admin/assign-admin/route.js
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '@/models/User';

const uri = "mongodb+srv://...";

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(uri);
}

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    // Only allow existing admins to create new admins
    const token = request.cookies.get('auth-token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const user = await User.findOne({ email });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    user.role = 'admin';
    await user.save();

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}
```

### 2. **Testing the System**

#### Test Admin Access:
1. Register a new user
2. Update their role to "admin" in database
3. Login → Should see `/admin` dashboard
4. Can create/edit/delete properties
5. Can view all form submissions

#### Test User Access:
1. Register as normal user (stays as "user" role)
2. Login → Should redirect to `/dashboard`
3. Can browse properties
4. Cannot edit/delete
5. Can search properties

---

## 🔐 Security Features

✅ **JWT Tokens**: 7-day expiration with role embedded
✅ **HttpOnly Cookies**: Tokens stored securely
✅ **Role-Based Access Control**: Different permissions per role
✅ **API Protection**: Admin endpoints check role before processing
✅ **Auth Redirects**: Unauthorized access redirected to login/dashboard

---

## 📊 Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: "user" | "agent" | "admin", // default: "user"
  createdAt: Date
}
```

### Properties Collection
```javascript
{
  _id: ObjectId,
  title: String,
  price: String,
  location: String,
  beds: Number,
  baths: Number,
  size: String,
  image: String (URL),
  type: "Buy" | "Rent",
  category: "Residential" | "Commercial",
  createdAt: Date,
  priceNumeric: Number (for filtering)
}
```

### Leads Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  message: String,
  formType: String (optional),
  createdAt: Date
}
```

---

## 🎨 User Flows

### Admin Flow
```
Login (with admin role)
    ↓
/admin Dashboard
    ├─ Properties Tab
    │   ├─ View all properties
    │   ├─ Create new property
    │   ├─ Edit existing property
    │   └─ Delete property
    │
    └─ Forms Tab
        └─ View all form submissions
```

### User Flow
```
Login (with user role)
    ↓
/dashboard (User Dashboard)
    ├─ Browse all properties (read-only)
    ├─ Search properties
    ├─ No edit/delete buttons
    └─ Logout
```

### Non-Authenticated Flow
```
Access /admin or /dashboard without login
    ↓
Redirect to /auth (login page)
```

---

## 🚨 API Endpoints & Permissions

| Endpoint | Method | Auth Required | Admin Only | Purpose |
|----------|--------|---------------|-----------|---------|
| /api/auth/login | POST | ❌ | ❌ | User login |
| /api/auth/register | POST | ❌ | ❌ | User registration |
| /api/auth/me | GET | ✅ | ❌ | Get current user info |
| /api/auth/logout | POST | ✅ | ❌ | User logout |
| /api/properties | GET | ❌ | ❌ | Browse properties |
| /api/properties | POST | ✅ | ✅ | Create property |
| /api/properties/[id] | GET | ❌ | ❌ | Get single property |
| /api/properties/[id] | PUT | ✅ | ✅ | Update property |
| /api/properties/[id] | DELETE | ✅ | ✅ | Delete property |
| /api/leads | POST | ❌ | ❌ | Submit form |
| /api/leads | GET | ✅ | ✅ | View all submissions |

---

## 🧪 Testing Checklist

- [ ] Admin can login and see admin dashboard
- [ ] Admin can create a new property
- [ ] Admin can edit a property
- [ ] Admin can delete a property
- [ ] Admin can view form submissions
- [ ] User can login and see user dashboard
- [ ] User can browse properties
- [ ] User cannot see edit/delete buttons
- [ ] User cannot access admin panel (redirected to dashboard)
- [ ] Unauthenticated users redirected to login
- [ ] Logout works correctly

---

## 🔄 Future Enhancements

- [ ] Implement agent role functionality
- [ ] Add admin management panel for user role assignment
- [ ] Add property statistics dashboard for admin
- [ ] Implement email notifications for form submissions
- [ ] Add saved properties feature for users
- [ ] Implement property filtering for users
- [ ] Add user profile management
- [ ] Implement property reviews/ratings

---

## ⚠️ Important Notes

1. **First Admin**: The first admin must be manually created in the database
2. **Role Changes**: If you update a user's role, they need to logout and login again for the new role to take effect
3. **JWT Secret**: Make sure `JWT_SECRET` is set in your `.env.local`
4. **CORS**: If running on different domains, ensure CORS is configured properly

---

## 📞 Support

For issues or questions about the admin system implementation, check:
1. Browser console for client-side errors
2. Server logs for API errors
3. Verify database connectivity
4. Check JWT token validity


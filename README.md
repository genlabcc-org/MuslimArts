# Muslim Arts College – Higher Education Website

A complete, high-fidelity responsive website for **Muslim Arts College, Thiruvithancode** (affiliated with Manonmaniam Sundaranar University, re-accredited by NAAC).

Built with **React**, **Vite**, and **JSX**, following clean modular component design where **each component has its own dedicated CSS file**.

---

## 📸 Section Architecture

1. **Floating Navigation Header** (`Navbar.jsx` & `Navbar.css`)
   - Left: Hamburger toggle button + `Menu`.
   - Center: Official **Muslim Arts College** emblem (4-petaled yellow rounded spark) & `THIRUVITHANCODE` sub-brand.
   - Right: Accessibility preferences modal trigger, Student/Staff portal trigger, and Search.

2. **Hero Banner & Dynamic Category Selector** (`Hero.jsx` & `Hero.css`)
   - Signature vibrant yellow gradient (`#FFC20E`) blending into academic and collegiate photography.
   - Dynamic headline, paragraph, and CTA pill button.
   - 4-tab docked selector:
     - `PLT` (Professional Leadership Training)
     - `CPD` (Continuing Professional Development)
     - `PSC` (Professional Skill Certification)
     - `MUSLIM ARTS` (College of Arts & Science)
   - Real-time active tab switching with animated underlines and glassmorphic inactive tabs.

3. **Choose Muslim Arts College / 4 Feature Cards** (`Features.jsx` & `Features.css`)
   - Warm cream background (`#F9F7F2`) with `CHOOSE MUSLIM ARTS COLLEGE` diamond badge and `A career long advantage` heading.
   - 4 large-radius white cards with custom yellow icons:
     - **Real world training**: Document inbox tray with solid yellow base.
     - **Personalised support**: Dual mentor figures (solid yellow & outline).
     - **Flexible learning**: Digital learning monitor with content preview.
     - **Professional growth**: 3-step stair progression with 5-point yellow star.

4. **Signature Yellow Banner & Stats** (`InfoBanner.jsx` & `InfoBanner.css`)
   - Rich yellow section featuring statistics (*Quality Higher Education*, *1:1 Mentorship*, *Holistic Academic Focus*) and enquiry CTA buttons.

5. **Campus & Accreditation Footer** (`Footer.jsx` & `Footer.css`)
   - Dark theme footer featuring main campus details at Thiruvithancode, Kanyakumari District, NAAC accreditation, academic links, and copyright.

6. **Interactive Drawers & Modals**
   - `MenuDrawer.jsx` & `MenuDrawer.css` (Slide-out navigation menu)
   - `SearchModal.jsx` & `SearchModal.css` (Search overlay with popular course queries)
   - `AuthModal.jsx` & `AuthModal.css` (Student & Faculty ERP portal modal)
   - `AccessibilityModal.jsx` & `AccessibilityModal.css` (High contrast & text scaling settings)

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or build for production
npm run build
npm run preview
```
# MuslimArts

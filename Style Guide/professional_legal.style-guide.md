# Professional Legal Style Guide

**Style Overview**:
A clean, minimalist **light theme** for web, centered on deep professional navy blue with pure white backgrounds and strategic golden yellow accents. Boundaries are created through subtle surface color differences and refined fine-line borders, complemented by generous whitespace to convey professional authority, trust, and accessible clarity.

## Colors
### Primary Colors
  - **primary-base**: `text-[#1B3A5F]` or `bg-[#1B3A5F]`
  - **primary-lighter**: `text-[#2D5280]` or `bg-[#2D5280]`
  - **primary-darker**: `text-[#0F2440]` or `bg-[#0F2440]`

### Background Colors

#### Structural Backgrounds

Choose based on layout type:

**For Vertical Layout** (Top Header + Optional Side Panels):
- **bg-nav-primary**: `bg-white border-b border-[#E8ECF0]` - Top header
- **bg-nav-secondary**: `bg-white border-r border-[#E8ECF0]` - Inner Left sidebar (if present)
- **bg-page**: `bg-white` - Page background (bg of Main Content area)

**For Horizontal Layout** (Side Navigation + Optional Top Bar):
- **bg-nav-primary**: `bg-white border-r border-[#E8ECF0]` - Left main sidebar
- **bg-nav-secondary**: `bg-white border-b border-[#E8ECF0]` - Inner Top header (if present)
- **bg-page**: `bg-white` - Page background (bg of Main Content area)

#### Container Backgrounds
For main content area. Adjust values when used on navigation backgrounds to ensure sufficient contrast.
- **bg-container-primary**: `bg-[#F8F9FB]`
- **bg-container-secondary**: `bg-[#F0F3F7]`
- **bg-container-inset**: `bg-[#1B3A5F]/5`
- **bg-container-inset-strong**: `bg-[#1B3A5F]/10`

### Text Colors
- **color-text-primary**: `text-[#1A1D23]`
- **color-text-secondary**: `text-[#4A5568]`
- **color-text-tertiary**: `text-[#6B7280]`
- **color-text-quaternary**: `text-[#9CA3AF]`
- **color-text-on-dark-primary**: `text-white/95` - Text on dark backgrounds and primary-base color surfaces
- **color-text-on-dark-secondary**: `text-white/75` - Text on dark backgrounds and primary-base color surfaces
- **color-text-link**: `text-[#1B3A5F]` - Links, text-only buttons without backgrounds, and clickable text in tables

### Functional Colors
Use **sparingly** to maintain a minimalist and professional overall style. Used for the surfaces of text-only cards, simple cards, buttons, and tags.
  - **color-success-default**: #D4EDDA
  - **color-success-light**: #E9F7EC - tag/label bg
  - **color-error-default**: #F8D7DA - alert banner bg
  - **color-error-light**: #FCE8EA - tag/label bg
  - **color-warning-default**: #FFF3CD - tag/label bg, alert banner bg
  - **color-warning-light**: #FFFBEB - tag/label bg
  - **color-function-default**: #1B3A5F
  - **color-function-light**: #D6E4F0 - tag/label bg

### Accent Colors
  - A secondary palette for occasional highlights and categorization. **Avoid overuse** to protect brand identity. Use **sparingly**.
  - **accent-gold**: `text-[#D4A745]` or `bg-[#D4A745]`
  - **accent-gold-light**: `text-[#E8C976]` or `bg-[#E8C976]`
  - **accent-gold-dark**: `text-[#B8903A]` or `bg-[#B8903A]`

### Data Visualization Charts
For data visualization charts only.
  - Standard data colors: #E8ECF0, #C5CDD8, #9CA3AF, #6B7280, #4A5568, #1A1D23
  - Important data can use small amounts of: #1B3A5F, #2D5280, #D4A745, #B8903A

## Typography
- **Font Stack**:
  - **font-family-base**: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif` — For regular UI copy

- **Font Size & Weight**:
  - **Caption**: `text-base font-normal`
  - **Body**: `text-lg font-normal`
  - **Body Emphasized**: `text-lg font-semibold`
  - **Card Title / Subtitle**: `text-xl font-semibold`
  - **Page Title**: `text-2xl font-semibold`
  - **Headline**: `text-4xl font-semibold`

- **Line Height**: 1.6

## Border Radius
  - **Small**: 8px — Elements inside cards (e.g., photos)
  - **Medium**: 12px
  - **Large**: 16px — Cards
  - **Full**: full — Toggles, avatars, small tags, inputs, etc.

## Layout & Spacing
  - **Tight**: 12px - For closely related small internal elements, such as icons and text within buttons
  - **Compact**: 16px - For small gaps between small containers, such as a line of tags
  - **Standard**: 24px - For gaps between medium containers like list items
  - **Relaxed**: 32px - For gaps between large containers and sections
  - **Section**: 48px - For major section divisions


## Create Boundaries (contrast of surface color, borders, shadows)
Overall interface uses subtle surface color differences combined with minimal fine-line borders for structural clarity, creating a clean and authoritative professional aesthetic.

### Borders
  - **Default**: 1px solid #E8ECF0. Used for inputs, cards, structural divisions. `border border-[#E8ECF0]`
  - **Stronger**: 1px solid #C5CDD8. Used for active or focused states. `border border-[#C5CDD8]`
  - **Emphasis**: 2px solid #1B3A5F. Used for key elements requiring attention. `border-2 border-[#1B3A5F]`

### Dividers
  - Use `border-t` or `border-b` `border-[#E8ECF0]` for section separation.

### Shadows & Effects
  - **Case 1**: No shadow for most elements to maintain clean minimalism.
  - **Case 2 (hover states only)**: `shadow-[0_2px_8px_rgba(27,58,95,0.08)]` - Subtle elevation on interactive elements

## Visual Emphasis for Containers
When containers (tags, cards, list items, rows) need visual emphasis to indicate priority, status, or category, use the following techniques:

| Technique | Implementation Notes | Best For | Avoid |
|-----------|---------------------|----------|-------|
| Background Tint | Slightly darker/lighter color or reduce transparency of backgrounds | Gentle, common approach for moderate emphasis needs | Heavy colors on large areas |
| Border Highlight | Use thin border with opacity for subtlety | Active/selected states, form validation | - |
| Status Tag/Label | Add colored tag/label inside container | Larger containers | - |
| Side Accent Bar | **Left edge only**, for **non-rounded containers** | Small non-rounded list items (e.g., side nav tabs), small non-rounded cards (e.g., case cards) | Large cards, wide list items, rounded containers |

## Assets
### Image

- For normal `<img>`: `object-cover`
- For `<img>` with:
  - Slight overlay: `object-cover brightness-90`
  - Heavy overlay: `object-cover brightness-75`

### Icon

- Use Lucide icons from Iconify.
- To ensure an aesthetic layout, each icon should be centered in a square container, typically without a background, matching the icon's size.
- Use Tailwind font size to control icon size
- Example:
  ```html
  <div class="flex items-center justify-center bg-transparent w-5 h-5">
  <iconify-icon icon="lucide:scale" class="text-base"></iconify-icon>
  </div>
  ```

### Third-Party Brand Logos:
   - Use Brand Icons from Iconify.
   - Logo Example:
     Monochrome Logo: `<iconify-icon icon="simple-icons:x"></iconify-icon>`
     Colored Logo: `<iconify-icon icon="logos:google-icon"></iconify-icon>`

### User's Own Logo:
- To protect copyright, do **NOT** use real product logos as a logo for a new product, individual user, or other company products.
- **Icon-based**:
  - **Graphic**: Use a simple, relevant icon (e.g., a `scale` icon for a law firm, a `gavel` icon for legal services).

## Page Layout - Web (*EXTREMELY* important)
### Determine Layout Type
- Choose between Vertical or Horizontal layout based on whether the primary navigation is a full-width top header or a full-height sidebar (left/right).
- User requirements typically indicate the layout preference. If unclear, consider:
  - Marketing/content sites typically use Vertical Layout.
  - Functional/dashboard sites can use either, depending on visual style. Sidebars accommodate more complex navigation than top bars. For complex navigation needs with a preference for minimal chrome (Vertical Layout adds an extra fixed header), choose Horizontal Layout (omits the fixed top header).
- Vertical Layout Diagram:
┌──────────────────────────────────────────────────────┐
│  Header (Primary Nav)                                │
├──────────┬──────────────────────────────┬────────────┤
│Left      │ Sub-header (Tertiary Nav)    │ Right      │
│Sidebar   │ (optional)                   │ Sidebar    │
│(Secondary├──────────────────────────────┤ (Utility   │
│Nav)      │ Main Content                 │ Panel)     │
│(optional)│                              │ (optional) │
│          │                              │            │
└──────────┴──────────────────────────────┴────────────┘
- Horizontal Layout Diagram:
┌──────────┬──────────────────────────────┬───────────┐
│          │ Header (Secondary Nav)       │           │
│ Left     │ (optional)                   │ Right     │
│ Sidebar  ├──────────────────────────────┤ Sidebar   │
│ (Primary │ Main Content                 │ (Utility  │
│ Nav)     │                              │ Panel)    │
│          │                              │ (optional)│
│          │                              │           │
└──────────┴──────────────────────────────┴───────────┘
### Detailed Layout Code
**Vertical Layout**
```html
<!-- Body: Adjust width (w-[1440px]) based on target screen size -->
<body class="w-[1440px] min-h-[700px] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial,sans-serif] leading-[1.6]">

  <!-- Header (Primary Nav): Fixed height -->
  <header class="w-full">
    <!-- Header content -->
  </header>

  <!-- Content Container: Must include 'flex' class -->
  <div class="w-full flex min-h-[700px]">
    <!-- Left Sidebar (Secondary Nav) (Optional): Remove if not needed. If Left Sidebar exists, use its ml to control left page margin -->
    <aside class="flex-shrink-0 min-w-fit">

    </aside>

    <!-- Main Content Area:
     Use Main Content Area's horizontal padding (px) to control distance from main content to sidebars or page edges.
     For pages without sidebars (like Marketing Pages, simple content pages such as help centers, privacy policies) use larger values (px-30 to px-80), for pages with sidebars (Functional/Dashboard Pages, complex content pages with multi-level navigation like knowledge base articles) use moderate values (px-8 to px-16) -->
    <main class="flex-1 overflow-x-hidden flex flex-col">
    <!--  Main Content -->

    </main>

    <!-- Right Sidebar (Utility Panel) (Optional): Remove if not needed. If Right Sidebar exists, use its mr to control right page margin -->
    <aside class="flex-shrink-0 min-w-fit">
    </aside>

  </div>
</body>
```

**Horizontal Layout**

```html
<!-- Body: Adjust width (w-[1440px]) based on target screen size. Must include 'flex' class -->
<body class="w-[1440px] min-h-[700px] flex font-[-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial,sans-serif] leading-[1.6]">

<!-- Left Sidebar (Primary Nav): Use its ml to control left page margin -->
  <aside class="flex-shrink-0 min-w-fit">
  </aside>

  <!-- Content Container-->
  <div class="flex-1 overflow-x-hidden flex flex-col min-h-[700px]">

    <!-- Header (Secondary Nav) (Optional): Remove if not needed. If Header exists, use its mx to control distance to left/right sidebars or page margins -->
    <header class="w-full">
    </header>

    <!-- Main Content Area: Use Main Content Area's pl to control distance from main content to left sidebar. Use pr to control distance to right sidebar/right page edge -->
    <main class="w-full">
    </main>


  </div>

  <!-- Right Sidebar (Utility Panel) (Optional): Remove if not needed. If Right Sidebar exists, use its mr to control right page margin -->
  <aside class="flex-shrink-0 min-w-fit">
  </aside>

</body>
```

## Tailwind Component Examples (Key attributes)
**Important Note**: Use utility classes directly. Do NOT create custom CSS classes or add styles in <style> tags for the following components

### Basic

- **Button**:
  - Example 1 (primary button):
    - button: `flex items-center gap-2 bg-[#1B3A5F] text-white/95 px-6 py-3 rounded-lg hover:bg-[#2D5280] transition`
      - span(button copy): `whitespace-nowrap font-semibold`
  - Example 2 (secondary button):
    - button: `flex items-center gap-2 border-2 border-[#1B3A5F] text-[#1B3A5F] px-6 py-3 rounded-lg hover:bg-[#1B3A5F]/5 transition`
      - span(button copy): `whitespace-nowrap font-semibold`
  - Example 3 (text button):
    - button: `flex items-center gap-2 text-[#1B3A5F] hover:text-[#2D5280] transition`
      - span(button copy): `whitespace-nowrap`

- **Tag Group (Filter Tags)**
  - container(scrollable): `flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden`
    - label (Tag item):
      - input: `type="radio" name="tag1" class="sr-only peer" checked`
      - div: `bg-[#F8F9FB] text-[#4A5568] border border-[#E8ECF0] px-4 py-2 rounded-full peer-checked:bg-[#1B3A5F] peer-checked:text-white/95 peer-checked:border-[#1B3A5F] hover:border-[#C5CDD8] transition whitespace-nowrap cursor-pointer`

### Data Entry
- **Progress bars/Slider**: `h-2 bg-[#F0F3F7] rounded-full`
  - Progress fill: `h-full bg-[#1B3A5F] rounded-full`

- **Checkbox**
  - label: `flex items-center gap-3 cursor-pointer`
    - input: `type="checkbox" class="sr-only peer"`
    - div: `w-5 h-5 bg-white border-2 border-[#C5CDD8] rounded-md flex items-center justify-center peer-checked:bg-[#1B3A5F] peer-checked:border-[#1B3A5F] text-transparent peer-checked:text-white/95 transition`
      - svg(Checkmark): `stroke="currentColor" stroke-width="3" fill="none" viewBox="0 0 24 24" class="w-4 h-4"`
        - path: `d="M5 13l4 4L19 7"`
    - span(text): `text-[#1A1D23]`

- **Radio button**
  - label: `flex items-center gap-3 cursor-pointer`
    - input: `type="radio" name="option1" class="sr-only peer"`
    - div: `w-5 h-5 bg-white border-2 border-[#C5CDD8] rounded-full flex items-center justify-center peer-checked:border-[#1B3A5F] transition`
      - svg(dot indicator): `fill="currentColor" class="w-3 h-3 text-transparent peer-checked:text-[#1B3A5F]"`
        - circle: `cx="12" cy="12" r="12"`
    - span(text): `text-[#1A1D23]`

- **Switch/Toggle**
  - label: `flex items-center gap-3 cursor-pointer`
    - div: `relative`
      - input: `type="checkbox" class="sr-only peer"`
      - div(Toggle track): `w-14 h-7 bg-[#E8ECF0] rounded-full peer-checked:bg-[#1B3A5F] transition`
      - div(Toggle thumb): `absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm peer-checked:translate-x-7 transition`
    - span(text): `text-[#1A1D23]`

- **Select/Dropdown**
  - Select container: `flex items-center justify-between bg-white border border-[#E8ECF0] px-4 py-3 rounded-lg cursor-pointer hover:border-[#C5CDD8] transition`
    - text: `text-[#1A1D23]`
    - Dropdown icon(square container): `flex items-center justify-center bg-transparent w-5 h-5`
      - icon: `text-[#6B7280]`

### Container
- **Navigation Menu - horizontal**
    - Navigation with sections/grouping:
        - Nav Container: `flex items-center justify-between w-full px-12 py-4`
        - Left Section: `flex items-center gap-12`
          - Menu Item: `flex items-center gap-2 text-[#1A1D23] hover:text-[#1B3A5F] transition cursor-pointer`
        - Right Section: `flex items-center gap-6`
          - Menu Item: `flex items-center gap-2 text-[#1A1D23] hover:text-[#1B3A5F] transition cursor-pointer`
          - Avatar(if applicable): `flex items-center gap-3`
            - avatar-image: `w-10 h-10 rounded-full border-2 border-[#E8ECF0]`

- **Card**
    - Example 1 (Content card with border):
        - Card: `bg-white border border-[#E8ECF0] rounded-2xl flex flex-col p-6 gap-4 hover:border-[#C5CDD8] transition`
        - Image: `rounded-lg w-full`
        - Text area: `flex flex-col gap-3`
          - card-title: `text-xl font-semibold text-[#1A1D23]`
          - card-subtitle: `text-base font-normal text-[#4A5568]`
    - Example 2 (Attorney profile card):
        - Card: `bg-white border border-[#E8ECF0] rounded-2xl flex gap-6 p-6 hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] transition`
        - Image: `rounded-lg w-32 h-32`
        - Text area: `flex flex-col gap-4 flex-1`
          - card-title: `text-xl font-semibold text-[#1A1D23]`
          - card-subtitle: `text-base font-normal text-[#4A5568]`
    - Example 3 (Practice area card with accent):
        - Card: `bg-[#F8F9FB] border-l-4 border-[#D4A745] rounded-lg flex flex-col p-6 gap-4`
        - Icon area: `flex items-center justify-center w-12 h-12 bg-[#1B3A5F]/10 rounded-lg`
        - Text area: `flex flex-col gap-3`
          - card-title: `text-xl font-semibold text-[#1A1D23]`
          - card-subtitle: `text-base font-normal text-[#4A5568]`

## Additional Notes

This style guide creates a professional legal aesthetic through:
- **Trust & Authority**: Deep navy blue combined with pure white backgrounds establishes credibility
- **Clarity & Accessibility**: Generous whitespace and high-contrast text ensure readability for all users
- **Professional Refinement**: Subtle borders and minimal shadows create structure without visual clutter
- **Strategic Accent**: Golden yellow provides warmth and visual hierarchy for key actions and information

<colors_extraction>
#1B3A5F
#2D5280
#0F2440
#FFFFFF
#E8ECF0
#F8F9FB
#F0F3F7
#1B3A5F0D
#1B3A5F1A
#1A1D23
#4A5568
#6B7280
#9CA3AF
#FFFFFFF2
#FFFFFFBF
#D4EDDA
#E9F7EC
#F8D7DA
#FCE8EA
#FFF3CD
#FFFBEB
#D6E4F0
#D4A745
#E8C976
#B8903A
#C5CDD8
</colors_extraction>

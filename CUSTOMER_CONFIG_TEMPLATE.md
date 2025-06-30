# Customer Configuration Template

## Copy this template when setting up new customers

```python
CLIENT_DATA = {
    "business_name": "[CUSTOMER_BUSINESS_NAME]",
    "location": "[CUSTOMER_CITY], [STATE] (Serving [SERVICE_AREA])",
    "phone": "[CUSTOMER_PHONE]",
    "booking_link": "[CUSTOMER_WEBSITE]/contact",
    
    # LEAD DELIVERY SETTINGS
    "lead_email": "[CUSTOMER_EMAIL]",  # Where leads will be sent
    "business_email": "[CUSTOMER_EMAIL]",  # Business contact for replies
    
    "services": [
        "[SERVICE_1]",
        "[SERVICE_2]", 
        "[SERVICE_3]",
        "[SERVICE_4]",
        "[SERVICE_5]",
        "[SERVICE_6]"
    ],
    
    "faq_data": """
    **ABOUT [BUSINESS_NAME]:**
    [BUSINESS_NAME] is a [BUSINESS_TYPE] serving [LOCATION] and surrounding areas. We specialize in [MAIN_SERVICES] and have been helping customers with [MAIN_VALUE_PROP] since [YEAR_STARTED].
    
    **OUR SERVICES:**
    - [SERVICE_1]: [BRIEF_DESCRIPTION]
    - [SERVICE_2]: [BRIEF_DESCRIPTION]
    - [SERVICE_3]: [BRIEF_DESCRIPTION]
    - [SERVICE_4]: [BRIEF_DESCRIPTION]
    
    **PRICING:**
    - [SERVICE_1]: Starting at $[PRICE]
    - [SERVICE_2]: Starting at $[PRICE]
    - [SERVICE_3]: Starting at $[PRICE]
    - Free estimates available
    - [PAYMENT_OPTIONS_ACCEPTED]
    
    **SERVICE AREAS:**
    We serve [PRIMARY_CITY] and surrounding areas including:
    - [AREA_1]
    - [AREA_2] 
    - [AREA_3]
    - [AREA_4]
    
    **HOURS OF OPERATION:**
    - Monday-Friday: [HOURS]
    - Saturday: [HOURS]
    - Sunday: [HOURS]
    - Emergency services: [AVAILABILITY]
    
    **CONTACT INFORMATION:**
    - Phone: [PHONE_NUMBER]
    - Email: [EMAIL]
    - Website: [WEBSITE]
    - Address: [ADDRESS]
    
    **FREQUENTLY ASKED QUESTIONS:**
    
    Q: Do you offer free estimates?
    A: [ANSWER]
    
    Q: What areas do you serve?
    A: [ANSWER]
    
    Q: How quickly can you respond to service calls?
    A: [ANSWER]
    
    Q: What payment methods do you accept?
    A: [ANSWER]
    
    Q: Are you licensed and insured?
    A: [ANSWER]
    
    Q: Do you offer emergency services?
    A: [ANSWER]
    
    Q: How long have you been in business?
    A: [ANSWER]
    
    Q: What makes you different from competitors?
    A: [ANSWER]
    
    **BOOKING PROCESS:**
    To schedule an appointment or get a quote:
    1. Call us at [PHONE]
    2. Visit our website at [WEBSITE]
    3. Email us at [EMAIL]
    4. Or provide your contact information here and we'll reach out to you
    
    **EMERGENCY SERVICES:**
    [IF_APPLICABLE - EMERGENCY_CONTACT_INFO]
    
    **REVIEWS & TESTIMONIALS:**
    We're proud to serve our community with [RATING] star reviews on Google. Our customers consistently praise our [TOP_QUALITIES].
    """
}
```

## Customer Information Collection Form

Use this when talking to new customers:

### Basic Business Information
- **Business Name**: ________________________________
- **Website URL**: __________________________________
- **Phone Number**: _________________________________
- **Email for Leads**: ______________________________
- **Business Address**: _____________________________
- **Years in Business**: ____________________________

### Services & Pricing
**List your main services and starting prices:**
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________
4. ________________________________________________
5. ________________________________________________
6. ________________________________________________

### Service Area
**What cities/areas do you serve?**
- Primary City: ___________________________________
- Other Areas: ___________________________________
- Travel Radius: __________________________________

### Hours & Availability
- **Regular Hours**: _______________________________
- **Emergency Services**: ___________________________
- **Best Time to Contact**: _________________________

### Common Customer Questions
**What do customers usually ask about?**
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________
4. ________________________________________________
5. ________________________________________________

### Unique Selling Points
**What makes you different from competitors?**
- ________________________________________________
- ________________________________________________
- ________________________________________________

### Lead Preferences
- **How quickly do you want to be notified of leads?** Immediately / Within 1 hour / Daily summary
- **What's the best way to contact you about leads?** Email / Text / Phone
- **What information do you need from potential customers?** Name, Phone, Email, Project Details, Budget, Timeline

---

## Example: Dental Practice

```python
CLIENT_DATA = {
    "business_name": "Smith Family Dentistry",
    "location": "Austin, TX (Serving Greater Austin Area)",
    "phone": "(512) 555-0123",
    "booking_link": "https://smithdentistry.com/appointment",
    
    "lead_email": "drsmith@smithdentistry.com",
    "business_email": "info@smithdentistry.com",
    
    "services": [
        "General Dentistry & Cleanings",
        "Cosmetic Dentistry & Veneers",
        "Dental Implants & Oral Surgery",
        "Orthodontics & Invisalign",
        "Emergency Dental Care",
        "Pediatric Dentistry"
    ],
    
    "faq_data": """
    **ABOUT SMITH FAMILY DENTISTRY:**
    Smith Family Dentistry is a modern dental practice serving Austin, TX and surrounding areas. We specialize in comprehensive dental care for the whole family and have been providing gentle, high-quality dental services since 2010.
    
    **OUR SERVICES:**
    - General Dentistry: Cleanings, fillings, crowns, and preventive care
    - Cosmetic Dentistry: Veneers, teeth whitening, and smile makeovers  
    - Dental Implants: Permanent tooth replacement solutions
    - Orthodontics: Traditional braces and Invisalign clear aligners
    - Emergency Care: Same-day appointments for dental emergencies
    - Pediatric Dentistry: Gentle care for children and teens
    
    **PRICING:**
    - New Patient Exam & Cleaning: $89 (regularly $180)
    - Dental Implants: Starting at $2,500
    - Invisalign: Starting at $3,500
    - Teeth Whitening: $299
    - Most insurance plans accepted
    - Flexible payment plans available
    
    **SERVICE AREAS:**
    We serve Austin and surrounding areas including:
    - Central Austin
    - South Austin  
    - Cedar Park
    - Round Rock
    - Lakeway
    - Bee Cave
    
    **HOURS OF OPERATION:**
    - Monday-Thursday: 8:00 AM - 5:00 PM
    - Friday: 8:00 AM - 2:00 PM
    - Saturday: Emergency appointments only
    - Sunday: Closed
    - Emergency line: Available 24/7
    
    **CONTACT INFORMATION:**
    - Phone: (512) 555-0123
    - Email: info@smithdentistry.com
    - Website: www.smithdentistry.com
    - Address: 123 Main Street, Austin, TX 78701
    
    **FREQUENTLY ASKED QUESTIONS:**
    
    Q: Do you accept insurance?
    A: Yes, we accept most major dental insurance plans including Delta Dental, Aetna, Cigna, and United Healthcare. We'll verify your benefits before your appointment.
    
    Q: Do you offer payment plans?
    A: Yes, we offer flexible payment plans through CareCredit and in-house financing options for treatments over $500.
    
    Q: How often should I get my teeth cleaned?
    A: We recommend professional cleanings every 6 months for most patients. Some patients with gum disease may need more frequent cleanings.
    
    Q: Do you see children?
    A: Yes, we provide gentle dental care for children of all ages. We recommend first visits by age 1 or within 6 months of the first tooth appearing.
    
    Q: What should I do in a dental emergency?
    A: Call our emergency line at (512) 555-0123. We provide same-day emergency appointments for severe pain, trauma, or urgent dental issues.
    
    Q: Do you offer teeth whitening?
    A: Yes, we offer both in-office professional whitening and take-home whitening kits. In-office treatment takes about an hour.
    
    Q: How long do dental implants last?
    A: With proper care, dental implants can last a lifetime. The success rate is over 95% when placed by an experienced dentist.
    
    Q: What's included in a new patient exam?
    A: New patient exams include a comprehensive oral examination, digital X-rays, oral cancer screening, and a professional cleaning (if no gum disease is present).
    
    **BOOKING PROCESS:**
    To schedule an appointment:
    1. Call us at (512) 555-0123
    2. Book online at www.smithdentistry.com
    3. Text us at (512) 555-0123
    4. Provide your contact information and we'll call you back within 2 hours
    
    **EMERGENCY SERVICES:**
    For dental emergencies outside office hours, call (512) 555-0123. Dr. Smith provides 24/7 emergency care for severe pain, trauma, knocked-out teeth, and urgent dental problems.
    
    **REVIEWS & TESTIMONIALS:**
    We're proud to maintain a 4.9-star rating on Google with over 200 reviews. Patients consistently praise our gentle approach, modern technology, and friendly staff.
    """
}
```
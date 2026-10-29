/**
 * Single source of truth for clinic information used across the whole site.
 */
export const clinic = {
  name: "Rehman Dental Clinic",
  altName: "Rehman Dental Care",
  doctor: "Dr. Aneela Rehman",
  doctorRole: "Dental Surgeon",
  qualification: "BDS, RDS, PMDC Regd.",
  manager: "Sir Adnan Khan",
  managerRole: "Operations Manager / Clinic Director",
  phoneDisplay: "0335-5875617",
  phoneTel: "03355875617",
  whatsappNumber: "923355875617",
  address: "No 407, St # 12, First Corner House, Near Tipu Market, G-8/2, Islamabad",
  addressShort: "G-8/2, Islamabad",
  hours: "Mon–Sat 10AM – 9PM",
  hoursShort: "Mon–Sat: 10AM – 9PM",
};

export const telHref = `tel:${clinic.phoneTel}`;

export const waHref = (message) =>
  `https://wa.me/${clinic.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const WA_APPOINTMENT = waHref(
  "Hi Rehman Dental Care! I would like to book an appointment."
);

export default clinic;
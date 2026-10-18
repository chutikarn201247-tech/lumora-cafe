# LUMORA — Tea & Lifestyle Cafe Website

เว็บไซต์แบบ Interactive Animated Cafe สร้างด้วย HTML5, Tailwind CSS และ Vanilla JavaScript พร้อม 3D Card Tilt, Particle System, Sound Synthesizer และ Studio ปรับแต่งเครื่องดื่ม

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
lumora-cafe/
├── index.html        # โครงสร้างหน้าเว็บหลัก
├── style.css         # สไตล์ 3D Perspective และคัสตอมแอนิเมชัน
├── app.js            # ระบบแอนิเมชัน ฟิสิกส์ละอองชา ระบบเสียง และตะกร้าสินค้า
├── copy_images.bat   # สคริปต์ดับเบิ้ลคลิกเพื่อเตรียมโฟลเดอร์ images อัตโนมัติ
├── images/           # รูปภาพเครื่องดื่ม (สร้างหลังรัน copy_images.bat)
│   ├── cup1_biscoff.jpg
│   ├── cup2_thaitea.jpg
│   ├── cup3_matcha.jpg
│   ├── cup4_blueberry.jpg
│   └── lineup_banner.jpg
└── README.md
```

---

## 🚀 ขั้นตอนการนำขึ้น Vercel (Deployment Guide)

### ขั้นตอนที่ 1: ดับเบิ้ลคลิก `copy_images.bat` (ทำครั้งแรก)
- ดับเบิ้ลคลิกไฟล์ `copy_images.bat` เพื่อคัดลอกรูปภาพเครื่องดื่มทั้ง 5 รูปลงโฟลเดอร์ `images/`

---

### วิธีที่ 1: ผ่าน GitHub (แนะนำ สะดวกที่สุด อัปเดตง่าย)
1. นำโฟลเดอร์ `lumora-cafe` อัปโหลดขึ้น **GitHub Repository** ของคุณ (ผ่าน GitHub Desktop หรือ Git CLI):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - LUMORA Cafe website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lumora-cafe.git
   git push -u origin main
   ```
2. เข้าเว็บไซต์ [https://vercel.com](https://vercel.com) แล้ว Login
3. คลิกปุ่ม **"Add New..."** -> **"Project"**
4. เลือก Repository `lumora-cafe` จาก GitHub
5. ตรงหน้าตั้งค่า:
   - **Framework Preset**: เลือก `Other`
   - **Root Directory**: `./` (ไม่ต้องแก้อะไร)
6. คลิกปุ่ม **"Deploy"** รอประมาณ 30 วินาที จะได้ URL เช่น `https://lumora-cafe.vercel.app` ใช้งานได้ทันทีทั่วโลก!

---

### วิธีที่ 2: ใช้คำสั่ง Vercel CLI (เร็ว ไม่ต้องใช้ GitHub)
1. เปิด Command Prompt หรือ PowerShell ในโฟลเดอร์ `lumora-cafe`
2. พิมพ์คำสั่ง:
   ```bash
   npx vercel
   ```
3. กด `y` เพื่อยืนยันการตั้งค่าตามคำถามบนหน้าจอ
4. ระบบจะทำการ Deploy ให้ทันที และส่งลิงก์ Vercel URL ให้คุณใช้งาน!

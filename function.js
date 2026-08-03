document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animated Number Counter (เอฟเฟกต์นับตัวเลขสถิติเมื่อเลื่อนจอมาถึง)
    const counters = document.querySelectorAll('.number');
    let animated = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 200; // ค่าปรับความเร็ว ยิ่งน้อยยิ่งเร็ว
            const isDecimal = target % 1 !== 0;

            const updateCount = () => {
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = (count + inc).toFixed(isDecimal ? 1 : 0);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // ตรวจจับการ Scroll
    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.stats-bar');
        if (!statsSection) return;
        
        const position = statsSection.getBoundingClientRect();
        
        if (position.top < window.innerHeight && !animated) {
            startCounters();
            animated = true;
        }
    });

    // 2. Form Submission Handler (การทำงานเมื่อกดส่งแบบฟอร์ม)
    const officialForm = document.getElementById('officialForm');
    if (officialForm) {
        officialForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('fullName').value;
            
            alert(`[ระบบสารสนเทศ] รับข้อมูลการติดต่อจากคุณ "${name}" เรียบร้อยแล้ว เจ้าหน้าที่จะดำเนินการตอบกลับผ่านอีเมลอย่างเป็นทางการภายใน 1-3 วันทำการ`);
            
            officialForm.reset();
        });
    }
});

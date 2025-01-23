let isDriving = false;
const speedLimit = 60; // กำหนดความเร็วเกินที่ต้องการแจ้งเตือนเป็น 60 กม./ชม.

document.getElementById('startDriving').addEventListener('click', function() {
    if (!isDriving) {
        isDriving = true;
        document.getElementById('notification').innerText = 'เริ่มขับขี่แล้ว... กำลังติดตามตำแหน่ง...';
        startTracking();
    }
});

function startTracking() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updatePosition, showError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        document.getElementById('notification').innerText = "ไม่รองรับการติดตามตำแหน่งบนอุปกรณ์นี้!";
    }
}

function updatePosition(position) {
    const currentLat = position.coords.latitude;
    const currentLon = position.coords.longitude;
    const currentSpeed = position.coords.speed ? position.coords.speed * 3.6 : 0; // แปลงจาก m/s เป็น km/h

    // แสดงตำแหน่งและความเร็วปัจจุบัน
    document.getElementById('location').innerText = `ตำแหน่งปัจจุบัน: ละติจูด ${currentLat.toFixed(6)}, ลองจิจูด ${currentLon.toFixed(6)}`;
    document.getElementById('speed').innerText = `ความเร็วปัจจุบัน: ${currentSpeed.toFixed(2)} กม./ชม.`;

    // ตรวจสอบความเร็วและแจ้งเตือน
    if (currentSpeed > speedLimit) {
        document.getElementById('notification').innerText = `คุณกำลังขับรถเร็วเกินไป! ลดความเร็ว. ความเร็ว: ${currentSpeed.toFixed(2)} กม./ชม.`;
    } else {
        document.getElementById('notification').innerText = `ขับขี่อย่างปลอดภัย! ความเร็วปัจจุบัน: ${currentSpeed.toFixed(2)} กม./ชม.`;
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('notification').innerText = "คุณไม่ได้อนุญาตให้เข้าถึงตำแหน่ง!";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('notification').innerText = "ข้อมูลตำแหน่งไม่พร้อมใช้งาน.";
            break;
        case error.TIMEOUT:
            document.getElementById('notification').innerText = "หมดเวลาการเชื่อมต่อ.";
            break;
        default:
            document.getElementById('notification').innerText = "เกิดข้อผิดพลาดในการติดตามตำแหน่ง.";
            break;
    }
}
let isDriving = false;
const speedLimit = 60; // กำหนดความเร็วเกินที่ต้องการแจ้งเตือนเป็น 60 กม./ชม.
const lineNotifyToken = 'YOUR_LINE_NOTIFY_TOKEN'; // นำ Access Token ที่ได้จาก Line Notify มาใส่ตรงนี้

let map; // ตัวแปรสำหรับแผนที่
let marker; // ตัวแปรสำหรับตำแหน่งของพนักงานขับรถ

document.getElementById('startDriving').addEventListener('click', function() {
    if (!isDriving) {
        isDriving = true;
        document.getElementById('notification').innerText = 'เริ่มขับขี่แล้ว... กำลังติดตามตำแหน่ง...';
        initMap(); // เริ่มการแสดงแผนที่
        startTracking(); // เริ่มติดตามตำแหน่ง
    }
});

function initMap() {
    // เริ่มต้นแผนที่ที่ตำแหน่งกลาง
    map = L.map('map').setView([13.736717, 100.523186], 13); // Latitude และ Longitude กลางกรุงเทพ
    
    // ตั้งค่า Tile Layer สำหรับแผนที่ (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

function startTracking() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updatePosition, showError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        document.getElementById('notification').innerText = "ไม่รองรับการติดตามตำแหน่งบนอุปกรณ์นี้!";
    }
}

let isDriving = false;
const speedLimit = 60; // กำหนดความเร็วเกินที่ต้องการแจ้งเตือนเป็น 60 กม./ชม.
const lineNotifyToken = 'YOUR_LINE_NOTIFY_TOKEN'; // นำ Access Token ที่ได้จาก Line Notify มาใส่ตรงนี้

document.getElementById('startDriving').addEventListener('click', function() {
    if (!isDriving) {
        isDriving = true;
        document.getElementById('notification').innerText = 'เริ่มขับขี่แล้ว... กำลังติดตามตำแหน่ง...';
        startTracking();
    }
});

function startTracking() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updatePosition, showError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        document.getElementById('notification').innerText = "ไม่รองรับการติดตามตำแหน่งบนอุปกรณ์นี้!";
    }
}

function updatePosition(position) {
    const currentLat = position.coords.latitude;
    const currentLon = position.coords.longitude;
    const currentSpeed = position.coords.speed ? position.coords.speed * 3.6 : 0; // แปลงจาก m/s เป็น km/h

    // แสดงตำแหน่งและความเร็วปัจจุบัน
    document.getElementById('location').innerText = `ตำแหน่งปัจจุบัน: ละติจูด ${currentLat.toFixed(6)}, ลองจิจูด ${currentLon.toFixed(6)}`;
    document.getElementById('speed').innerText = `ความเร็วปัจจุบัน: ${currentSpeed.toFixed(2)} กม./ชม.`;

    // ตรวจสอบความเร็วและแจ้งเตือน
    if (currentSpeed > speedLimit) {
        document.getElementById('notification').innerText = `คุณกำลังขับรถเร็วเกินไป! ลดความเร็ว. ความเร็ว: ${currentSpeed.toFixed(2)} กม./ชม.`;
        sendLineNotify(`คุณกำลังขับรถเร็วเกินไป! ความเร็วปัจจุบัน: ${currentSpeed.toFixed(2)} กม./ชม.`);
    } else {
        document.getElementById('notification').innerText = `ขับขี่อย่างปลอดภัย! ความเร็วปัจจุบัน: ${currentSpeed.toFixed(2)} กม./ชม.`;
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('notification').innerText = "คุณไม่ได้อนุญาตให้เข้าถึงตำแหน่ง!";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('notification').innerText = "ข้อมูลตำแหน่งไม่พร้อมใช้งาน.";
            break;
        case error.TIMEOUT:
            document.getElementById('notification').innerText = "หมดเวลาการเชื่อมต่อ.";
            break;
        default:
            document.getElementById('notification').innerText = "เกิดข้อผิดพลาดในการติดตามตำแหน่ง.";
            break;
    }
}

// ฟังก์ชันการแจ้งเตือนผ่าน Line Notify
function sendLineNotify(message) {
    const url = 'https://notify-api.line.me/api/notify';
    const data = new URLSearchParams();
    data.append('message', message);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${lineNotifyToken}`
        },
        body: data
    })
    .then(response => response

function updatePosition(position) {
    const currentLat = position.coords.latitude;
    const currentLon = position.coords.longitude;
    const currentSpeed = position.coords.speed ? position.coords.speed * 3.6 : 0; // แปลงจาก m/s เป็น km/h

    // แสดงตำแหน่งและความเร็วปัจจุบัน
    document.getElementById('location').innerText = `ตำแหน่งปัจจุบัน: ละติจูด ${currentLat.toFixed(6)}, ลองจิจูด ${currentLon.toFixed(6)}`;
    document.getElementById('speed').innerText = `ความเร็วปัจจุบัน: ${currentSpeed.toFixed(2)} กม./ชม.`;

    // อัปเดตตำแหน่งบนแผนที่
    if (!marker) {
        // ถ้ายังไม่มี marker ให้สร้าง marker ใหม่
        marker = L.marker([currentLat, currentLon]).addTo(map);
    } else {
        // ถ้ามี marker แล้ว ให้ย้ายตำแหน่ง marker
        marker.setLatLng([currentLat, currentLon]);
    }
    map.setView([currentLat, currentLon], 13); // เปลี่ยนตำแหน่งศูนย์กลางของแผนที่ตามตำแหน่งใหม่

    // ตรวจสอบความเร็วและแจ้งเตือน
    if (currentSpeed > speedLimit) {
        document.getElementById('notification').innerText = `คุณกำลังขับรถเร็วเกินไป! ลดความเร็ว. ความเร็ว: ${currentSpeed.toFixed(2)} กม./ชม.`;
        sendLineNotify(`คุณกำลังขับรถเร็วเกินไป! ความเร็วปัจจุบัน: ${currentSpeed.toFixed(2)} กม./ชม.`);
    } else {
        document.getElementById('notification').innerText = `ขับขี่อย่างปลอดภัย! ความเร็วปัจจุบัน: ${currentSpeed.toFixed(2)} กม./ชม.`;
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('notification').innerText = "คุณไม่ได้อนุญาตให้เข้าถึงตำแหน่ง!";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('notification').innerText = "ข้อมูลตำแหน่งไม่พร้อมใช้งาน.";
            break;
        case error.TIMEOUT:
            document.getElementById('notification').innerText = "หมดเวลาการเชื่อมต่อ.";
            break;
        default:
            document.getElementById('notification').innerText = "เกิดข้อผิดพลาดในการติดตามตำแหน่ง.";
            break;
    }
}

// ฟังก์ชันการแจ้งเตือนผ่าน Line Notify
function sendLineNotify(message) {
    const url = 'https://notify-api.line.me/api/notify';
    const data = new URLSearchParams();
    data.append('message', message);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${lineNotifyToken}`
        },
        body: data
    })
    .then(response => response.json())
    .then(data => {
        console.log('Line Notify Response:', data);
    })
    .catch(error => {
        console.error('Error sending Line notification:', error);
    });
}

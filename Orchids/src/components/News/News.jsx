import React from 'react';
import './News.css';

export default function News() {
  return (
    <div className="news-container">
      <div className="news-card">
        <img src='src/assets/images/pmc.jpg' alt="News 1" className="news-image" />
        <h2 className="news-title">Singapore định danh loài lan mới theo tên Thủ tướng Phạm Minh Chính và phu nhân</h2>
        <p className="news-date">February 9, 2023</p>
        <p className="news-description">Singapore đặt tên loài lan mới là "Papilionanda Pham Le Tran Chinh", theo tên Thủ tướng Phạm Minh Chính và phu nhân đang thăm chính thức nước này</p>
      </div>
      <div className="news-card">
        <img src='src/assets/images/lankhonglo.jpg' alt="News 2" className="news-image" />
        <h2 className="news-title">Lan khổng lồ xuất hiện ở Anh</h2>
        <p className="news-date">April 6, 2023</p>
        <p className="news-description">Trong lúc đi dạo trên một con dốc gần nhà, cư dân ở hạt Oxfordshire tình cờ phát hiện một loài lan tuyệt đẹp có thể vươn cao 1m.Có nguồn gốc từ lưu vực Địa Trung Hải ở phía nam châu Âu, lan khổng lồ (Himantoglossum robertianum) được cho là đang mở rộng phạm vi phân bố về phía bắc do khí hậu ấm lên, với các ghi chép cho thấy chúng có thể tồn tại ở Pháp và Hà Lan.</p>
      </div>
      <div className="news-card">
        <img src='src/assets/images/lantuyetchung.jpg' alt="News 3" className="news-image" />
        <h2 className="news-title">Tái phát hiện loài lan tưởng đã tuyệt chủng ở Anh</h2>
        <p className="news-date">June 16, 2023</p>
        <p className="news-description">Một loài lan đã biến mất ở Anh hơn một thập kỷ bất ngờ được tìm thấy trên sân thượng của một tòa nhà ngân hàng 11 tầng ở London.</p>
      </div>
      </div>
     )}
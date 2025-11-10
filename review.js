document.addEventListener('DOMContentLoaded', () => {
    // Âm thanh
    const soundCorrect = document.getElementById('soundCorrect');
    const soundWrong = document.getElementById('soundWrong');
    const toggleSoundBtn = document.getElementById('toggleSound');
    let soundEnabled = true;

    toggleSoundBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        toggleSoundBtn.classList.toggle('muted');
        toggleSoundBtn.innerHTML = soundEnabled 
            ? '<i class="fas fa-volume-up"></i>' 
            : '<i class="fas fa-volume-mute"></i>';
    });

    // === DỮ LIỆU CÂU HỎI: 8 CHƯƠNG – MỖI CHƯƠNG 10 CÂU ===
    const questions = {
        // CHƯƠNG 1: Hoàn cảnh & Nguyên nhân Đổi mới
        1: [
            { q: "Trước năm 1986, Việt Nam rơi vào tình trạng gì?", a: "Khủng hoảng kinh tế – xã hội nghiêm trọng", options: ["Phát triển mạnh", "Khủng hoảng kinh tế – xã hội nghiêm trọng", "Ổn định", "Tăng trưởng cao"] },
            { q: "Lạm phát trước Đổi mới có lúc lên tới bao nhiêu?", a: "Ba con số", options: ["Dưới 10%", "Ba con số", "Không có lạm phát", "Dưới 50%"] },
            { q: "Cơ chế quản lý nào kìm hãm sự sáng tạo?", a: "Quan liêu bao cấp", options: ["Thị trường tự do", "Quan liêu bao cấp", "Kinh tế số", "Tư bản"] },
            { q: "Thế giới cuối thế kỷ 20 đang diễn ra xu hướng gì?", a: "Toàn cầu hóa mạnh mẽ", options: ["Cô lập", "Toàn cầu hóa mạnh mẽ", "Chiến tranh", "Kế hoạch hóa"] },
            { q: "Công nghệ nào bùng nổ trong cách mạng KHCN?", a: "Công nghệ thông tin và tự động hóa", options: ["Nông nghiệp", "Công nghệ thông tin và tự động hóa", "Khai thác mỏ", "Thủ công"] },
            { q: "Nếu không đổi mới, Việt Nam sẽ như thế nào?", a: "Tụt hậu xa hơn", options: ["Dẫn đầu", "Tụt hậu xa hơn", "Ổn định", "Không ảnh hưởng"] },
            { q: "Đổi mới là yêu cầu gì?", a: "Tất yếu khách quan", options: ["Tùy chọn", "Tất yếu khách quan", "Tạm thời", "Lỗi thời"] },
            { q: "Nguồn gốc của Đổi mới là từ đâu?", a: "Thực tiễn Việt Nam", options: ["Lý thuyết Marx", "Thực tiễn Việt Nam", "Mô hình Liên Xô", "Mô hình Mỹ"] },
            { q: "Hàng hóa trước 1986 như thế nào?", a: "Khan hiếm", options: ["Dư thừa", "Khan hiếm", "Xuất khẩu nhiều", "Không cần"] },
            { q: "Năng suất lao động trước Đổi mới?", a: "Thấp", options: ["Cao", "Thấp", "Trung bình", "Không đo được"] }
        ],

        // CHƯƠNG 2: Nội dung & Mục tiêu
        2: [
            { q: "Trọng tâm của Đổi mới là gì?", a: "Đổi mới kinh tế", options: ["Chính trị", "Đổi mới kinh tế", "Văn hóa", "Xã hội"] },
            { q: "Chuyển từ cơ chế nào sang cơ chế nào?", a: "Kế hoạch hóa → Thị trường XHCN", options: ["Thị trường → Kế hoạch", "Kế hoạch hóa → Thị trường XHCN", "Tư bản → XHCN", "Không đổi"] },
            { q: "Kinh tế tư nhân được coi là gì?", a: "Động lực quan trọng", options: ["Gánh nặng", "Động lực quan trọng", "Tạm thời", "Không cần"] },
            { q: "FDI là viết tắt của?", a: "Đầu tư trực tiếp nước ngoài", options: ["Hỗ trợ tài chính", "Đầu tư trực tiếp nước ngoài", "Vay nợ", "Xuất khẩu"] },
            { q: "Mục tiêu công nghiệp hóa gắn với gì?", a: "Hội nhập kinh tế quốc tế", options: ["Cô lập", "Hội nhập kinh tế quốc tế", "Nông nghiệp", "Thủ công"] },
            { q: "Nhà nước pháp quyền XHCN nhằm mục tiêu gì?", a: "Phát huy dân chủ", options: ["Tập trung quyền lực", "Phát huy dân chủ", "Loại bỏ dân chủ", "Không cần"] },
            { q: "Đổi mới toàn diện trên mấy lĩnh vực?", a: "Tất cả các lĩnh vực", options: ["Chỉ kinh tế", "Tất cả các lĩnh vực", "Chỉ chính trị", "Không đổi"] },
            { q: "Kinh tế thị trường định hướng XHCN có đặc điểm gì?", a: "Có sự quản lý của Nhà nước", options: ["Tự do hoàn toàn", "Có sự quản lý của Nhà nước", "Không quản lý", "Chỉ tư nhân"] },
            { q: "Đổi mới nhằm bảo đảm điều gì?", a: "Công bằng và tiến bộ xã hội", options: ["Bất bình đẳng", "Công bằng và tiến bộ xã hội", "Cô lập", "Chiến tranh"] },
            { q: "Nguồn văn kiện chính của Chương 2?", a: "Cương lĩnh 2011", options: ["Đại hội VI", "Cương lĩnh 2011", "Đại hội VIII", "Đại hội XIII"] }
        ],

        // CHƯƠNG 3: Giai đoạn 1996 – nay
        3: [
            { q: "Đại hội VIII (1996) đề ra mục tiêu gì?", a: "Công nghiệp hóa – hiện đại hóa", options: ["Nông nghiệp hóa", "Công nghiệp hóa – hiện đại hóa", "Dịch vụ hóa", "Khai thác"] },
            { q: "Việt Nam gia nhập ASEAN năm nào?", a: "1995", options: ["1990", "1995", "2000", "2007"] },
            { q: "Hiệp định thương mại Việt – Mỹ ký năm nào?", a: "2000", options: ["1995", "2000", "2007", "2010"] },
            { q: "Việt Nam gia nhập WTO năm nào?", a: "2007", options: ["2000", "2005", "2007", "2010"] },
            { q: "Hiện nay Việt Nam đang ứng dụng mạnh mẽ công nghệ gì?", a: "Chuyển đổi số và AI", options: ["Nông nghiệp", "Chuyển đổi số và AI", "Thủ công", "Khai thác"] },
            { q: "FTA là gì?", a: "Hiệp định thương mại tự do", options: ["Hiệp định quân sự", "Hiệp định thương mại tự do", "Hiệp định văn hóa", "Hiệp định giáo dục"] },
            { q: "Việt Nam tham gia bao nhiêu FTA?", a: "Hàng loạt", options: ["Không có", "Hàng loạt", "Chỉ 1", "Chỉ 2"] },
            { q: "Mục tiêu đến năm 2020 là gì?", a: "Nước công nghiệp theo hướng hiện đại", options: ["Nông nghiệp", "Nước công nghiệp theo hướng hiện đại", "Dịch vụ", "Khai khoáng"] },
            { q: "Đại hội nào đánh dấu bước chuyển sang CNH-HĐH?", a: "Đại hội VIII", options: ["VI", "VII", "Đại hội VIII", "IX"] },
            { q: "Nguồn nhân lực được chú trọng như thế nào?", a: "Chất lượng cao", options: ["Số lượng", "Chất lượng cao", "Không cần", "Chỉ lao động chân tay"] }
        ],

        // CHƯƠNG 4: Thiết kế sản phẩm thời kỳ đổi mới
        4: [
            { q: "Việt Nam đang ở kỷ nguyên nào?", a: "Chuyển đổi số và sáng tạo công nghệ", options: ["Nông nghiệp", "Chuyển đổi số và sáng tạo công nghệ", "Công nghiệp nặng", "Thủ công"] },
            { q: "Doanh nghiệp Việt tập trung vào sản phẩm gì?", a: "Thông minh ứng dụng AI, IoT", options: ["Nông sản", "Thông minh ứng dụng AI, IoT", "Quần áo", "Đồ gỗ"] },
            { q: "Make in Vietnam nghĩa là gì?", a: "Sản phẩm do người Việt thiết kế", options: ["Nhập khẩu", "Sản phẩm do người Việt thiết kế", "Lắp ráp", "Chỉ bán trong nước"] },
            { q: "Ví dụ về sản phẩm Make in Vietnam?", a: "VinFast, Viettel AI", options: ["Toyota", "VinFast, Viettel AI", "Samsung", "Apple"] },
            { q: "BKAV nổi tiếng với sản phẩm gì?", a: "Thiết bị IoT", options: ["Phần mềm diệt virus", "Thiết bị IoT", "Điện thoại", "Xe máy"] },
            { q: "FPT AI phát triển giải pháp gì?", a: "Phần mềm trí tuệ nhân tạo", options: ["Nông nghiệp", "Phần mềm trí tuệ nhân tạo", "Thực phẩm", "Dệt may"] },
            { q: "Tinh thần sản phẩm Việt là gì?", a: "Đổi mới – hội nhập – tự cường", options: ["Phụ thuộc", "Đổi mới – hội nhập – tự cường", "Cô lập", "Bảo thủ"] },
            { q: "Sản phẩm Việt phục vụ thị trường nào?", a: "Trong nước và quốc tế", options: ["Chỉ trong nước", "Trong nước và quốc tế", "Chỉ xuất khẩu", "Không bán"] },
            { q: "Cách mạng công nghiệp nào đang diễn ra?", a: "4.0", options: ["1.0", "2.0", "3.0", "4.0"] },
            { q: "Startup Việt tập trung vào lĩnh vực gì?", a: "Công nghệ cao", options: ["Nông nghiệp", "Công nghệ cao", "Thương mại", "Du lịch"] }
        ],

        // CHƯƠNG 5: Cương lĩnh 2011
        5: [
            { q: "Cương lĩnh 1991 ra đời khi nào?", a: "Giai đoạn đầu Đổi mới", options: ["Cuối Đổi mới", "Giai đoạn đầu Đổi mới", "Sau 2000", "Trước 1986"] },
            { q: "Sau 20 năm, Việt Nam đã đạt được gì?", a: "Hội nhập toàn cầu", options: ["Cô lập", "Hội nhập toàn cầu", "Phụ thuộc", "Không đổi"] },
            { q: "Đại hội XI (2011) làm gì với Cương lĩnh?", a: "Bổ sung và phát triển", options: ["Hủy bỏ", "Bổ sung và phát triển", "Giữ nguyên", "Giảm bớt"] },
            { q: "Cương lĩnh 2011 nhấn mạnh vai trò của gì?", a: "KHCN, đổi mới sáng tạo", options: ["Nông nghiệp", "KHCN, đổi mới sáng tạo", "Thủ công", "Khai thác"] },
            { q: "Mục tiêu đến giữa thế kỷ XXI là gì?", a: "Nước công nghiệp hiện đại", options: ["Nông nghiệp", "Nước công nghiệp hiện đại", "Dịch vụ", "Khai khoáng"] },
            { q: "Cương lĩnh 2011 làm rõ điều gì?", a: "Con đường đi lên CNXH", options: ["Loại bỏ CNXH", "Con đường đi lên CNXH", "Theo tư bản", "Không rõ"] },
            { q: "Chuyển đổi số được đề cập từ khi nào?", a: "Đại hội XI", options: ["Đại hội VI", "Đại hội XI", "Đại hội VIII", "Đại hội XIII"] },
            { q: "Kinh tế tri thức dựa trên yếu tố nào?", a: "Sáng tạo và công nghệ", options: ["Lao động chân tay", "Sáng tạo và công nghệ", "Tài nguyên", "Vốn"] },
            { q: "Cương lĩnh 2011 cập nhật điều gì?", a: "Thực tiễn phát triển mới", options: ["Lý thuyết cũ", "Thực tiễn phát triển mới", "Không cập nhật", "Sai lầm cũ"] },
            { q: "Đại hội XI diễn ra năm nào?", a: "2011", options: ["1991", "2001", "2011", "2021"] }
        ],

        // CHƯƠNG 6: Thành tựu
        6: [
            { q: "Việt Nam hiện thuộc nhóm nước nào?", a: "Thu nhập trung bình", options: ["Nghèo", "Thu nhập trung bình", "Giàu", "Siêu giàu"] },
            { q: "Tăng trưởng GDP trung bình 1986-2020 khoảng?", a: "6-7%", options: ["2%", "4%", "6-7%", "10%"] },
            { q: "Việt Nam là thành viên của tổ chức nào?", a: "Liên Hợp Quốc, ASEAN, WTO", options: ["Không có", "Liên Hợp Quốc, ASEAN, WTO", "Chỉ ASEAN", "Chỉ WTO"] },
            { q: "Tỷ lệ hộ nghèo giảm từ bao nhiêu xuống bao nhiêu?", a: "60% → dưới 3%", options: ["10% → 5%", "60% → dưới 3%", "30% → 20%", "Không giảm"] },
            { q: "Hạ tầng nào được hiện đại hóa nhanh?", a: "Giao thông, năng lượng, số", options: ["Chỉ đường bộ", "Giao thông, năng lượng, số", "Chỉ điện", "Không có"] },
            { q: "Việt Nam nằm trong nhóm quốc gia nào ở châu Á?", a: "Phát triển năng động", options: ["Lạc hậu", "Phát triển năng động", "Ổn định", "Suy thoái"] },
            { q: "Giáo dục, y tế, văn hóa được như thế nào?", a: "Phát triển", options: ["Suy giảm", "Phát triển", "Không đổi", "Loại bỏ"] },
            { q: "Việt Nam có vai trò gì tại Liên Hợp Quốc?", a: "Ủy viên không thường trực HĐBA", options: ["Không tham gia", "Ủy viên không thường trực HĐBA", "Thường trực", "Quan sát viên"] },
            { q: "Xuất khẩu tăng gấp bao nhiêu lần?", a: "Hàng trăm lần", options: ["2 lần", "10 lần", "Hàng trăm lần", "Không tăng"] },
            { q: "Thành tựu lớn nhất là gì?", a: "Ổn định và phát triển đất nước", options: ["Chiến tranh", "Ổn định và phát triển đất nước", "Cô lập", "Phụ thuộc"] }
        ],

        // CHƯƠNG 7: Hạn chế & Thách thức
        7: [
            { q: "Hạn chế lớn nhất của năng lực cạnh tranh?", a: "Năng suất lao động thấp", options: ["Thiếu vốn", "Năng suất lao động thấp", "Quá đông dân", "Ít tài nguyên"] },
            { q: "Ô nhiễm môi trường tập trung ở đâu?", a: "Khu công nghiệp", options: ["Nông thôn", "Khu công nghiệp", "Vùng núi", "Biển"] },
            { q: "Tham nhũng làm suy yếu điều gì?", a: "Niềm tin nhân dân", options: ["Kinh tế", "Niềm tin nhân dân", "Quân sự", "Giáo dục"] },
            { q: "Việt Nam phụ thuộc vào thị trường nào?", a: "Thị trường quốc tế", options: ["Nội địa", "Thị trường quốc tế", "Chỉ nhập khẩu", "Không phụ thuộc"] },
            { q: "Khoảng cách giàu nghèo được đo bằng chỉ số gì?", a: "Hệ số Gini", options: ["GDP", "Hệ số Gini", "CPI", "HDI"] },
            { q: "Nguồn nhân lực chất lượng cao còn?", a: "Thiếu", options: ["Dư thừa", "Thiếu", "Đủ", "Không cần"] },
            { q: "Chuyển đổi cơ cấu kinh tế còn?", a: "Chậm", options: ["Nhanh", "Chậm", "Đứng yên", "Không cần"] },
            { q: "Khoa học công nghệ còn?", a: "Chưa đột phá", options: ["Dẫn đầu", "Chưa đột phá", "Không cần", "Đã đủ"] },
            { q: "Biến đổi khí hậu ảnh hưởng lớn đến vùng nào?", a: "Đồng bằng sông Cửu Long", options: ["Miền núi", "Đồng bằng sông Cửu Long", "Tây Nguyên", "Đồng bằng sông Hồng"] },
            { q: "Thách thức lớn nhất hiện nay?", a: "Phát triển bền vững", options: ["Tăng trưởng nhanh", "Phát triển bền vững", "Cô lập", "Chiến tranh"] }
        ],

        // CHƯƠNG 8: Kết luận
        8: [
            { q: "Đổi mới được khởi xướng từ năm nào?", a: "1986", options: ["1975", "1986", "1996", "2000"] },
            { q: "Đổi mới là bước ngoặt gì?", a: "Lịch sử", options: ["Sai lầm", "Lịch sử", "Thử nghiệm", "Tạm thời"] },
            { q: "Từ 1996, Việt Nam hướng tới điều gì?", a: "Đổi mới sáng tạo, chuyển đổi số", options: ["Nông nghiệp", "Đổi mới sáng tạo, chuyển đổi số", "Công nghiệp nặng", "Thủ công"] },
            { q: "Đại hội XI (2011) thể hiện tầm nhìn gì?", a: "Việt Nam hiện đại, sáng tạo", options: ["Lạc hậu", "Việt Nam hiện đại, sáng tạo", "Cô lập", "Phụ thuộc"] },
            { q: "AI là yếu tố then chốt để làm gì?", a: "Hội nhập bền vững", options: ["Cô lập", "Hội nhập bền vững", "Suy thoái", "Chiến tranh"] },
            { q: "Tương lai Việt Nam phụ thuộc vào gì?", a: "Con người và sáng tạo", options: ["Tài nguyên", "Con người và sáng tạo", "Vốn nước ngoài", "Chỉ công nghệ"] },
            { q: "Đổi mới là quá trình?", a: "Liên tục", options: ["Một lần", "Liên tục", "Tạm dừng", "Kết thúc"] },
            { q: "Việt Nam hiện là đối tác của bao nhiêu quốc gia?", a: "Hơn 190", options: ["Dưới 100", "Hơn 190", "150", "170"] },
            { q: "Tinh thần Đổi mới là gì?", a: "Dám nghĩ, dám làm", options: ["Bảo thủ", "Dám nghĩ, dám làm", "Chờ đợi", "Phụ thuộc"] },
            { q: "Việt Nam đang vươn mình trong kỷ nguyên gì?", a: "Công nghệ toàn cầu", options: ["Nông nghiệp", "Công nghệ toàn cầu", "Công nghiệp nhẹ", "Thủ công"] }
        ]
    };

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;

    // DOM Elements
    const startBtn = document.getElementById('startQuiz');
    const nextBtn = document.getElementById('nextQuestion');
    const restartBtn = document.getElementById('restartQuiz');
    const viewHistoryBtn = document.getElementById('viewHistory');
    const backBtn = document.getElementById('backToResult');

    startBtn.onclick = startQuiz;
    nextBtn.onclick = nextQuestion;
    restartBtn.onclick = () => location.reload();
    viewHistoryBtn.onclick = showHistory;
    backBtn.onclick = () => {
        document.getElementById('historyContainer').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'block';
    };

    function startQuiz() {
        const chapter = document.getElementById('chapterDropdown').value;
        currentQuestions = shuffle(questions[chapter]).slice(0, 10);
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('chapterSelect').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'block';
        showQuestion();
    }

    function showQuestion() {
        const q = currentQuestions[currentQuestionIndex];
        document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
        document.getElementById('score').textContent = score;
        document.getElementById('question').textContent = q.q;
        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = '';
        shuffle(q.options).forEach(opt => {
            const btn = document.createElement('div');
            btn.className = 'option';
            btn.textContent = opt;
            btn.onclick = () => selectAnswer(opt, btn);
            optionsDiv.appendChild(btn);
        });
        nextBtn.style.display = 'none';
    }

    function selectAnswer(selected, btn) {
        const correct = currentQuestions[currentQuestionIndex].a;
        document.querySelectorAll('.option').forEach(b => b.style.pointerEvents = 'none');
        if (selected === correct) {
            score++;
            btn.classList.add('correct');
            if (soundEnabled) soundCorrect.play();
        } else {
            btn.classList.add('incorrect');
            if (soundEnabled) soundWrong.play();
        }
        nextBtn.style.display = 'block';
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < 10) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'block';
        document.getElementById('finalScore').innerHTML = `Bạn trả lời đúng <strong>${score}/10</strong> câu!`;

        // Lưu lịch sử
        const history = JSON.parse(localStorage.getItem('doiMoiQuizHistory') || '[]');
        const result = {
            chapter: document.getElementById('chapterDropdown').options[document.getElementById('chapterDropdown').selectedIndex].text,
            score: `${score}/10`,
            date: new Date().toLocaleString('vi-VN')
        };
        history.unshift(result);
        localStorage.setItem('doiMoiQuizHistory', JSON.stringify(history.slice(0, 50)));
    }

    function showHistory() {
        document.getElementById('resultContainer').style.display = 'none';
        document.getElementById('historyContainer').style.display = 'block';
        const history = JSON.parse(localStorage.getItem('doiMoiQuizHistory') || '[]');
        const list = document.getElementById('historyList');
        list.innerHTML = history.length === 0 
            ? '<li>Chưa có lịch sử ôn tập</li>'
            : history.map(item => `<li><strong>${item.chapter}</strong>: ${item.score} <br><small>${item.date}</small></li>`).join('');
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
});
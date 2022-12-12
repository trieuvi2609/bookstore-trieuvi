export const STORE_NAME = 'HCMUT BOOKSTORE'

export const FOOTER_INFO = {
  contact: [
    'PHONE: Toll Free (123) 456-7890',
    'EMAIL: mail@ecommerce.com',
    'ADDRESS: Ho Chi Minh University of Technology, Ho Chi Minh, Vietnam',
    'Mon - Sun / 9:00 AM - 8:00 PM'
  ],
  services: ['Home page', 'List of Books', 'Profile user', 'Login & register'],
  link_services: ['/', '/books', '/profile', '/login'],
  other: ['About Us', 'Returns', 'Custom Service', 'Terms & Condition'],
  linksSocial: {
    facebook: 'http://www.facebook.com/',
    twitter: 'http://www.twitter.com/',
    linkedin: 'http://www.linkedin.com/'
  }
}

export const BANNER_HOME = {
  title: 'Welcome to book store',
  text: 'This is a website we created to serve people who loves books and wants to buy it!',
  searchTitle: 'Search book',
  searchInput: 'Name or type of book ...',
  img: require('assets/images/banner-bg.png').default
}

export const TYPES_BOOK = [
  {
    id: 1,
    count: 12,
    name: 'Romantic',
    path: '/type/romantic'
  },
  {
    id: 2,
    count: 12,
    name: 'Romantic',
    path: '/type/romantic'
  },
  {
    id: 3,
    count: 12,
    name: 'Romantic',
    path: '/type/romantic'
  },
  {
    id: 4,
    count: 12,
    name: 'Romantic',
    path: '/type/romantic'
  }
]

export const ABOUT_US = [
  {
    id: 1,
    img: require('assets/images/ava1.jpg').default,
    name: 'Huynh Trieu Vi',
    title: 'Member',
    text: 'Backend Developer',
    url: 'https://www.facebook.com/vi.trieu.372/'
  },
  {
    id: 2,
    img: require('assets/images/ava2.jpg').default,

    name: 'Bui Minh Khoa',
    title: 'Member',

    text: 'Frontend Developer',
    url: 'https://www.facebook.com/khoa.bui.0301tg'
  }
]

export const BOOKS = {
  book_list: [
    {
      b_desc:
        'Containing over 5,000 entries from Aalto to ziggurat, this is the most comprehensive and up-to-date dictionary of architecture in paperback. Beautifully illustrated and written in a clear and concise style, it is an invaluable work of reference for both students of architecture and the general reader, as well as professional architects. Covers all periods of Western architectural history, from ancient times to the present day Concise biographies of leading architects, from Brunelleschi and Imhotep to Le Corbusier and Richard Rogers Over 250 illustrations specially drawn for this volume',
      b_edition: '2007',
      b_hot: true,
      b_id: '1',
      b_img: 'https://vn-live-01.slatic.net/p/d6112aae95995f65121cfe6583bc964c.jpg',
      b_isbn: '89564636 ',
      b_nm: 'Doraemon',
      b_page: '200',
      b_pdf: 'upload_ebook/arc.txt',
      b_price: '199000',
      b_publisher: 'Fujiko Fujio',
      b_stock: true,
      b_subcat: '1',
      comment_list: [
        {
          comment: 'Good book',
          fullName: 'Khang Nguyen'
        },
        {
          comment: 'Amazing!!',
          fullName: 'Pham Khang Nguyen 123'
        },
        {
          comment: 'I think this book is just good for people who like architecture.',
          fullName: 'Pham Khang Nguyen'
        },
        {
          comment: 'So good!',
          fullName: 'Pham Khang Nguyen'
        },
        {
          comment: 'This is a good book!',
          fullName: 'Dang Thi Mai La'
        },
        {
          comment: 'Not good',
          fullName: 'Pham Khang Nguyen 123'
        },
        {
          comment: 'This book is so good!!!!!!',
          fullName: 'Pham Khang Nguyen'
        },
        {
          comment: 'Good',
          fullName: 'Pham Khang Nguyen'
        },
        {
          comment: 'Good',
          fullName: 'Pham Khang Nguyen'
        },
        {
          comment: 'Not good',
          fullName: 'Pham Khang Nguyen 123'
        },
        {
          comment: 'Good book!!',
          fullName: 'Khang Nguyen'
        },
        {
          comment: 'Good',
          fullName: 'Khang Nguyen'
        },
        {
          comment: 'Amazing!!',
          fullName: 'Pham Khang Nguyen'
        },
        {
          comment: 'Not good as I think',
          fullName: 'Pham Khang Nguyen 123'
        },
        {
          comment: 'Amazing!!',
          fullName: 'Pham Khang Nguyen 123'
        },
        {
          comment: 'Good Book!!!!',
          fullName: 'Pham Khang Nguyen'
        },
        {
          comment: 'The most interesting book',
          fullName: 'Pham Khang Nguyen'
        },
        {
          comment: 'This is a good book!',
          fullName: 'Dang Thi Mai La'
        }
      ]
    },
    {
      b_desc:
        'ác phẩm Lịch sử Việt Nam, từ nguồn gốc đến giữa thế kỷ XX này là sự kết hợp của hai chuyên khảo mang tính kinh điển về lịch sử và văn hóa Việt Nam của Giáo sư Lê Thành Khôi, người thuộc về số ít các sử gia Việt đương đại quan trọng nhất. Đó là cuốn Le Viêt-Nam, Histoire et Civilisation (Việt Nam, Lịch sử và Văn minh, Nxb Minuit, Paris, 1955) và Histoire du Viêt Nam, des origines à 1858 (Lịch sử Việt Nam, từ nguồn gốc đến năm 1858, Nxb Sud-Est Asie, Paris, 1982).',
      b_edition: '2021',
      b_hot: true,
      b_id: '10',
      b_img: 'https://salt.tikicdn.com/cache/w1200/media/catalog/product/d/a/dai-viet-su-ki-toan-thu.jpg',
      b_isbn: '88564636',
      b_nm: 'Đại Việt Sử ký toàn thư',
      b_page: '199',
      b_pdf: 'upload_ebook/arc.txt',
      b_price: '299000',
      b_publisher: 'Lê Thành Khôi',
      b_stock: true,
      b_subcat: '9',
      comment_list: []
    },
    {
      b_desc: 'Abc',
      b_edtion: '2008',
      b_hot: true,
      b_id: '2',
      b_img: 'https://sach86.com/wp-content/uploads/2019/09/cam-on-nguoi-lon.jpg',
      b_isbn: '89564637',
      b_nm: 'Cảm ơn người lớn',
      b_page: '198',
      b_pdf: '"upload_ebook/arc.txt"',
      b_price: '200000',
      b_publisher: 'Nguyễn Nhật Ánh',
      b_stock: true,
      b_subcat: '2',
      comment_list: []
    },
    {
      b_desc:
        'Tiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời người đọc.  “Nhưng nhà luyện kim đan không quan tâm mấy đến những điều ấy. Ông đã từng thấy nhiều người đến rồi đi, trong khi ốc đảo và sa mạc vẫn là ốc đảo và sa mạc. Ông đã thấy vua chúa và kẻ ăn xin đi qua biển cát này, cái biển cát thường xuyên thay hình đổi dạng vì gió thổi nhưng vẫn mãi mãi là biển cát mà ông đã biết từ thuở nhỏ. Tuy vậy, tự đáy lòng mình, ông không thể không cảm thấy vui trước hạnh phúc của mỗi người lữ khách, sau bao ngày chỉ có cát vàng với trời xanh nay được thấy chà là xanh tươi hiện ra trước mắt. ‘Có thể Thượng đế tạo ra sa mạc chỉ để cho con người biết quý trọng cây chà là,’ ông nghĩ.”    - Trích Nhà giả kim',
      b_edition: '2021',
      b_hot: true,
      b_id: '3',
      b_img: 'https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg',
      b_isbn: '89564638',
      b_nm: 'Nhà giả kim',
      b_page: '255',
      b_pdf: '"upload_ebook/arc.txt"',
      b_price: '79000',
      b_publisher: 'Paulo Coelho',
      b_stock: false,
      b_subcat: '3',
      comment_list: []
    },
    {
      b_descs:
        '13 Nguyên Tắc Nghĩ Giàu Làm Giàu là cuốn sách “chỉ dẫn” duy nhất chỉ ra những nguồn lực bạn phải có để thành công. Cuốn sách sẽ giúp bạn trở nên giàu có, làm giàu thêm cho cuộc sống của bạn trên tất cả các phương diện của cuộc sống chứ không chỉ về tài chính và vật chất. Những ý tưởng trong cuốn sách Think and Grow rich – 13 nguyên tắc nghĩ giàu, làm giàu bắt nguồn từ những động lực tốt đẹp: “Thành công cá nhân” và “Quan điểm suy nghĩ tích cực”.  Cuốn sách chứa đựng nhiều hơn những gì mà cuốn sách giải thích về sức mạnh của những nguyên tắc. Phần hấp dẫn nhất của cuốn sách chính là những điều phi thường, những thông điệp trong cuốn sách được viết ra từ rất lâu nhưng vẫn mang tính “thời đại”. Ông đã bàn về những quan niệm như quản lý nhóm, dịch vụ chăm sóc khách hàng hoàn hảo, những công cụ hữu hình, trí tuệ tập thể và mục tiêu cần được viết ra trước khi hành động.',
      b_edition: '2011',
      b_hot: false,
      b_id: '4',
      b_img: 'https://firstnews.com.vn/public/uploads/products/nghigiaulamgiau-biamem110k-resized.jpg',
      b_isbn: '89564637',
      b_nm: 'Nghĩ giàu làm giàu',
      b_page: '233',
      b_pdf: 'upload_ebook/arc.txt',
      b_price: '139000',
      b_publisher: 'Napoleon Hill',
      b_stock: true,
      b_subcat: '4',
      comment_list: []
    },
    {
      b_desc:
        'Trong quyển “Vũ trụ trong vỏ hạt dẻ”, Stephen Hawking đưa chúng ta đến khía cạnh nổi trội của vật lý lý thuyết, ở đó sự thất thường còn lạ lùng hơn hư cấu, để giảng giải - bằng ngôn ngữ bình thường (không phải ngôn ngữ của người chuyên môn) - những nguyên tắc điều khiển vũ trụ của chúng ta.  Cũng giống như số đông trong cộng đồng những nhà vật lý lý thuyết. Stephen Hawking đang tìm kiếm để khám phá cái cốt lõi của khoa học – Thuyết vạn vật nằm trong tâm củ vũ trụ.  Bằng cách viết dí dỏm và dễ tiếp cận, ông dẫn dắt chúng ta vào hành trình khám phá những bí mật của vũ trụ - từ siêu trọng lượng đến siêu đối xứng, từ thuyết lượng tử đến thuyết M, từ phép chụp ảnh giao thoa laser đến tính hai mặt (tính đối ngẫu).  Ông đưa chúng ta đến biên giới hoang dã của khoa học, nơi mà lý thuyết siêu dây và p mạng có thể nắm giữ mang mối cho điều bí ẩn. Và ông để chúng ta lại đằng sau hậu trường của một trong những cuộc phiêu lưu trí tuệ hấp dẫn nhất của ông khi ông tìm cách kết nối Thuyết tương đối tổng quát của Einstein với ý tưởng về những lịch sử đa dạng của Feynman vào trong một thuyết thống nhất hoàn chỉnh, một thuyết sẽ giải thích mọi thứ xảy ra trong vũ trụ.  Đây là quyển sách cần thiết cho tất cả chúng ta, những người muốn tìm hiểu vũ trụ chúng ta đang sống. “Cách viết gãy gọn về bản chất của khoa học và vũ trụ… Giáo sư Hawking quả là một thiên tài.  ” – The New York Times “Độc giả sẽ có cảm giác thích thú khi đọc quyển sách cũng giống như sự say mê của Hawking khi viết cuốn sách nà.” – The Dallas Morning News “Niềm đam mê vũ trụ của Hawking khiến ông trở thành tác giả mà độc giả phải tìm đọc.” – Los Angeles Times “Nội dung rất dễ hiểu và hình ảnh đầy thông tin…một giới thiệu xuất sắc về một số ý tưởng lớn nhất trong vật lý ” – Science News “Một cuốn sách thân thiện với độc giả, cả cách viết và hình minh học” – USA Today  Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....',
      b_edition: '2018',
      b_hot: true,
      b_id: '5',
      b_img: 'https://images.thuvienpdf.com/NMZR41.webp',
      b_isbn: '89564637',
      b_nm: 'Vũ trụ trong vỏ hạt dẻ',
      b_page: '223',
      b_pdf: 'upload_ebook/arc.txt',
      b_price: '99000',
      b_publisher: 'Stephen Hawking',
      b_stock: false,
      b_subcat: '5',
      comment_list: []
    },
    {
      b_desc:
        'Machine learning là một chủ đề được nhắc đến rất nhiều trong thời gian trở lại đây bên cạnh trí tuệ nhân tạo, nó được ứng dụng cực kỳ nhiều ở thời điểm hiện tại trong hầu hết tất cả các lĩnh vực. Trong bài viết hôm nay, chúng ta sẽ cùng tìm hiểu xem machine learning là gì, các khái niệm cơ bản và vì sao nó lại được ứng dụng rỗng rãi như vậy?',
      b_edition: '2022',
      b_hot: true,
      b_id: '6',
      b_img: 'https://salt.tikicdn.com/cache/w1200/ts/product/06/21/c8/19807f0a6b8a6217de2b6f0fa8943bdf.jpg',
      b_isbn: '89564650',
      b_nm: 'Deep Learning - Cuộc cách mạng học sâu',
      'b_page ': '300',
      b_pdf: 'upload_ebook/arc.txt',
      b_price: '219000',
      b_publisher: 'Đại học Bách Khoa TPHCM',
      b_stock: true,
      b_subcat: '5',
      comment_list: []
    },
    {
      b_desc:
        'Buck, đang sống trong một gia đình khá giả, bỗng bị bắt cóc và cuộc đời của Buck thay đổi từ đây. Chú bị bán làm chó kéo xe. Câu chuyện ghi lại Buck trên những bước đường khó nhọc, cùng với chủ, phải đối diện với cuộc đấu tranh sinh tồn. Chú đã học cách tồn tại và cuối cùng đã trở thành thủ lĩnh của đàn chó.  Nhưng rồi, Buck đã nghe và bị thôi thúc bởi những tiếng gọi nơi rừng hoang. “Và có một thứ luôn gắn chặt với cảnh mộng về con người lông lá ấy là tiếng gọi, tiếng gọi cứ vang lên trong rừng thẳm. Mỗi lần nghe tiếng gọi ấy là lòng Buck tràn ngập nỗi xao xuyến bồi hồi và những ham muốn kỳ lạ. Nó mang đến cho Buck một niềm vui mơ hồ mà thú vị, và Buck nhận thấy trong lòng mình sôi lên cuồng nhiệt bao nỗi khát khao mong muốn những điều mà Buck không rõ là gì. Thỉnh thoảng Buck vùng dậy chạy vào rừng, đuổi theo tiếng gọi, sục tìm nó như thể nó là một vật có thể sờ mó được”…  Sau một lần đi săn từ rừng trở về, Buck đã nhìn thấy cảnh hoang tàn, đẫm máu đối với người chủ nó thương yêu nhất: John cùng những người bạn và các chú chó kéo xe bị nhóm người Yhet tàn sát. Lúc này đây, tình yêu thương, trung thành mà Buck dành cho John đã trở thành nỗi đau thống thiết, khiến Buck trở nên hoang dã hơn bao giờ hết…  Đọc Tiếng gọi nơi hoang dã, chúng ta sẽ cùng Buck đến những miền đất hoang sơ chưa ai biết, biết thế nào là luật dùi cui và răng nanh, hiểu thế nào là lao khổ của dây cương và đường mòn…  Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....',
      b_edition: '1999',
      b_hot: true,
      b_id: '7',
      b_img: 'https://cf.shopee.vn/file/d729a92e0e03d350d3a4a3e4d20b3ca2',
      b_isbn: '89564636',
      b_nm: 'Tiếng gọi nơi hoang dã',
      b_page: '200',
      b_pdf: 'upload_ebook/arc.txt',
      b_price: '139000',
      b_publisher: 'Jack London',
      b_stock: true,
      b_subcat: '7',
      comment_list: []
    },
    {
      b_desc:
        'Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên, khi rất nhiều dự định mà thiếu đôi phần định hướng, thì CẢM HỨNG là điều quan trọng để bạn trẻ bắt đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình. Cà Phê Cùng Tony là tập hợp những bài viết của tác giả Tony Buổi Sáng. Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó: Từ chuyện lớn như định vị bản thân giữa bạn bè quốc tế, cho đến chuyện nhỏ như nên chú ý những phép tắc xã giao thông thường.  Chúng tôi tin rằng những người trẻ tuổi luôn mang trong mình khát khao vươn lên và tấm lòng hướng thiện, và có nhiều cách để động viên họ biến điều đó thành hành động. Nếu như tập sách nhỏ này có thể khơi gợi trong lòng bạn đọc trẻ một cảm hứng tốt đẹp, như tách cà phê thơm vào đầu ngày nắng mới, thì đó là niềm vui lớn của tác giả Tony Buổi Sáng.  Tony Buổi Sáng cũng là tác giả của Trên đường băng, tác phẩm hiện đã bán hơn 200.000 bản.  Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....',
      b_edition: '2020',
      b_hot: 'true',
      b_id: '8',
      b_img: 'https://www.nxbtre.com.vn/Images/Book/nxbtre_full_07352019_043547.jpg',
      b_isbn: '89564663',
      b_nm: 'Cafe cùng Tony',
      b_pdf: 'upload_ebook/arc.txt',
      b_price: '59000',
      b_publisher: 'Tony Buổi Sáng',
      b_stock: true,
      b_subcat: '8',
      comment_list: []
    },
    {
      b_desc:
        'Cuốn Từ Điển Anh-Việt 350.000 Từ này được biên soạn theo Cambridge Dictionary: - Cập nhật hơn 350.000 từ mới thuộc các lĩnh vực - Giải nghĩa đầy đủ, ví dụ phong phú - Trình bày ngắn gọn, khoa học, dễ sử dụng - Đáp ứng yêu cầu học tập, tra cứu, dịch thuậ Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....',
      b_edition: '2016',
      b_hot: false,
      b_id: '9',
      b_img: 'https://salt.tikicdn.com/cache/w1200/ts/product/f9/0c/ef/46613fa2509c2e04184443cf27e53200.jpg',
      b_isbn: '89564673',
      b_nm: 'Từ điển Anh - Việt Cambridge',
      'b_page ': '500',
      b_pdf: 'upload_ebook/arc.txt',
      b_price: '399000',
      b_publisher: 'Cambridge University of Lodon',
      b_stock: true,
      b_subcat: '8',
      comment_list: []
    }
  ],
  status: 'true'
}

export const CATEGORIES = {
  category_list: [
    {
      cat_id: '1',
      cat_nm: 'Sách thiếu nhi'
    },
    {
      cat_id: '2',
      cat_nm: 'Văn học'
    },
    {
      cat_id: '3',
      cat_nm: 'Sách nước ngoài'
    },
    {
      cat_id: '4',
      cat_nm: 'Sách kinh tế'
    },
    {
      cat_id: '5',
      cat_nm: 'Sách khoa học'
    },
    {
      cat_id: '6',
      cat_nm: 'Tiểu thuyết kinh điển'
    },
    {
      cat_id: '7',
      cat_nm: 'Sách kĩ năng sống'
    },
    {
      cat_id: '8',
      cat_nm: 'Từ điển'
    },
    {
      cat_id: '9',
      cat_nm: 'Sách lịch sử'
    }
  ],
  status: 'true'
}

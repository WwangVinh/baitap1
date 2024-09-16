// Import các thành phần cần thiết từ thư viện React Native và Expo
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

// Hàm chính của ứng dụng
export default function App() {
    return (
        // Sử dụng ImageBackground để hiển thị ảnh nền
        <ImageBackground
            source={{ uri: 'https://anonyviet.com/wp-content/uploads/2023/02/cach-tao-hinh-ascii-Duc-Phat-khi-nhan-F12.jpg' }} // Đường dẫn URL đến ảnh nền
            style={styles.backgroundImage} // Sử dụng kiểu dáng định sẵn cho ảnh nền
        >
        // View dùng để chứa các thành phần con
        <View style={styles.container}>
            {/* Hiển thị đoạn văn bản */}
            <Text>Hello ửod</Text>

            {/* Hiển thị hình ảnh */}
            <Image
                source={{ uri: 'https://www.shutterstock.com/image-vector/computer-cat-animal-meme-pixel-260nw-2415076223.jpg' }} // Đường dẫn URL đến ảnh
                style={styles.image} // Sử dụng kiểu dáng định sẵn cho ảnh
            />

            {/* Thanh trạng thái của ứng dụng */}
            <StatusBar style="auto" />
        </View>
    );
}

// Định nghĩa các kiểu dáng sử dụng trong ứng dụng
const styles = StyleSheet.create({
    // Kiểu dáng cho View chứa các thành phần con
    container: {
        flex: 1,
        backgroundColor: '#fff', // Màu nền trắng
        alignItems: 'center', // Canh giữa theo chiều ngang
        justifyContent: 'center', // Canh giữa theo chiều dọc
    },
    // Kiểu dáng cho hình ảnh
    image: {
        width: 200, // Chiều rộng của ảnh
        height: 190, // Chiều cao của ảnh
        marginTop: 20, // Khoảng cách phía trên của ảnh
    },
});
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//            Phật phù hộ, không bao giờ BUG
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
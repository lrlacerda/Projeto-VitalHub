import LottieView from "lottie-react-native";
import { View } from "react-native";

export function Splash() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <LottieView
                source={require("../../assets/Animation - 1710270810506.json")}
                
                autoPlay
                loop
            />
        </View>
    );
}

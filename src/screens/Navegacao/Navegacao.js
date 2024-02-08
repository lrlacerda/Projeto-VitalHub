import { Button, View } from "react-native";

export const Navegacao = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="ForgotPassword"
                onPress={() => navigation.navigate("ForgotPassword")}
            />
            <Button
                title="EmailCode"
                onPress={() => navigation.navigate("EmailCode")}
            />
            <Button
                title="NewPassword"
                onPress={() => navigation.navigate("NewPassword")}
            />
            <Button
                title="Register"
                onPress={() => navigation.navigate("Register")}
            />
            <Button
                title="RecordInsertion"
                onPress={() => navigation.navigate("RecordInsertion")}
            />
            <Button
                title="PatientRecordInsertion"
                onPress={() => navigation.navigate("PatientRecordInsertion")}
            />
        </View>
    );
};

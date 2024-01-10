import { View, Text , Button} from "react-native";


interface TodoPropsInterface {
    title: string;
    onDelete: () => void;
}

export function Todo(props: TodoPropsInterface) {

    return <View>
        <Text>{props.title}</Text>
        <Button title="del" onPress={() => props.onDelete()} />
    </View>
}
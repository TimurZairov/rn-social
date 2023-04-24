import React from "react";
import styles from "./style";
import {Image, Text, TextInput, View} from "react-native";
import {useForm, Controller, Control} from "react-hook-form";

import user from "../../assets/data/user.json"
import colors from "../../theme/color";
import {IUser} from "../../types/models";


type iEditableUserFields = 'name' | 'username' | 'website' | 'bio'
type IEditableProfile = Pick<IUser, iEditableUserFields>


interface IInputContainer {
    label: string,
    placeHolder: string,
    multiline?: boolean,
    control: Control<IEditableProfile, object>,
    name: iEditableUserFields
}

const InputContainer = ({label, placeHolder, multiline = false, control, name}: IInputContainer) => {

    return <Controller
        name={name}
        control={control}
        render={({field: {onBlur, value, onChange}}) => {
            return (
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>{label}</Text>
                    <TextInput placeholder={placeHolder}
                               style={styles.input}
                               placeholderTextColor={colors.lightGrey}
                               multiline={multiline}
                               onChangeText={onChange}
                               value={value}
                               onBlur={onBlur}
                    />
                </View>
            )
        }
        }
    />

}


const EditProfileScreen = () => {

    const {control, handleSubmit} = useForm <IEditableProfile>();

    const onSubmit = (data: IEditableProfile) => console.log(data);

    const changePhotoHandler = () => {
        console.warn("photo")
    }


    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image source={{uri: user.image}} style={styles.userImage}/>
                <Text style={styles.changeText} onPress={changePhotoHandler}>Change Profile photo</Text>
            </View>

            <InputContainer label="Name" placeHolder={"Name"} control={control} name={"name"}/>
            <InputContainer label="USerName" placeHolder={"USerName"} control={control} name={"username"}/>
            <InputContainer label="Website" placeHolder={"Website"} control={control} name={"website"}/>
            <InputContainer label="Bio" placeHolder={"Bio"} multiline control={control} name={"bio"}/>
            <Text style={[styles.changeText, {textAlign: "center"}]} onPress={handleSubmit(onSubmit)}>Submit</Text>

        </View>
    )
};

export default EditProfileScreen;
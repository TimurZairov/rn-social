import React, {useState} from "react";
import styles from "./style";
import {Image, Text, TextInput, View} from "react-native";
import {useForm, Controller, Control} from "react-hook-form";
import {Asset, launchImageLibrary} from 'react-native-image-picker';

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
    name: iEditableUserFields,
    rules?: object
}

const InputContainer = ({label, placeHolder, multiline = false, control, name, rules = {}}: IInputContainer) => {

    return <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onBlur, value, onChange,}, fieldState: {error}}) => {
            return (
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>{label}</Text>
                    <View style={{flex: 1}}>
                        <TextInput placeholder={placeHolder}
                                   style={[styles.input, {borderBottomColor: error ? colors.orange : colors.darkGray}]}
                                   placeholderTextColor={colors.lightGrey}
                                   multiline={multiline}
                                   onChangeText={onChange}
                                   value={value}
                                   onBlur={onBlur}
                        />
                        {error && <Text style={{color: colors.orange}}>{error.message || "Error"}</Text>}
                    </View>
                </View>
            )
        }
        }
    />

}


const EditProfileScreen = () => {

    const [changeAvatar, setChangeAvatar] = useState<null | Asset>(null)

    const {control, handleSubmit, formState: {errors}} = useForm<IEditableProfile>({
        defaultValues: {
            name: user.name,
            username: user.username,
            website: "",
            bio: user.bio

        }
    });

    const onSubmit = (data: IEditableProfile) => console.log(data);

    const changePhotoHandler = async () => {
        await launchImageLibrary({mediaType: "photo"}, ({didCancel, errorCode, errorMessage, assets}) => {
            if(!didCancel && !errorCode && assets && assets.length){
                setChangeAvatar(assets[0])
            }
        })
    }


    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image source={{uri: changeAvatar?.uri || user.image}} style={styles.userImage}/>
                <Text style={styles.changeText} onPress={changePhotoHandler}>Change Profile photo</Text>
            </View>

            <InputContainer
                label="Name"
                placeHolder={"Name"}
                control={control}
                name={"name"}
                rules={{required: "Name is required", minLength: {value: 3, message: "Name must be more than 3 characters"}}}
            />
            <InputContainer
                label="USerName"
                placeHolder={"USerName"}
                control={control}
                name={"username"}
                rules={{required: "Username is required"}}
            />
            <InputContainer
                label="Website"
                placeHolder={"Website"}
                control={control}
                name={"website"}
                rules={{required: "Website is required"}}
            />
            <InputContainer
                label="Bio"
                placeHolder={"Bio"}
                multiline
                control={control}
                name={"bio"}
                rules={{required: "Bio is required"}}
            />
            <Text style={[styles.changeText, {textAlign: "center"}]} onPress={handleSubmit(onSubmit)}>Submit</Text>

        </View>
    )
};

export default EditProfileScreen;
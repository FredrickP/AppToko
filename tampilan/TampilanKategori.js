import { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { create } from "apisauce";
import styles from "./style";

const TampilanKategori = (props) => {
    const baseUrl = "https://fe.dev.dxtr.asia";
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        if (categories.length == 0 || categories[0] === "Unauthenticated") {
            const api = create({
                baseURL: `${baseUrl}`,
                headers: {
                  Accept: "application/json",
                  "Authorization": `Bearer ${props.token}`
                }
            });
            api.get('/api/category').then(response => {
                setCategories(response.data)
            }).catch(err => console.log(err));
        }
    });

    const renderCategory = (categories) => {
        return(
            categories.map((category, i) => {
                return(
                    <View style={styles.itemKategori}>
                        <Text style={{
                            color: 'black', 
                            fontSize: 12, 
                            fontWeight: 'bold'
                        }}>{category.name}</Text>
                    </View>
                );
            })
        );
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.kategoryView}>
                {categories.length > 0 && categories[0] instanceof ({}).constructor ?  renderCategory(categories) : <Text style={{alignSelf: 'center'}}>Loading...</Text>}
            </View>
        </ScrollView>
    );
}

export default TampilanKategori;
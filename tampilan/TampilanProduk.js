import { useEffect, useState, Component } from "react";
import { View, Text, Image } from "react-native";
import { Heart } from "react-native-feather";
import { create } from "apisauce";
import Icon from "react-native-dynamic-vector-icons";
import styles from "./style";

const TampilanProduk = (props) => {
    const baseUrl = "https://fe.dev.dxtr.asia";
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        if (products.length == 0 || products[0] === "Unauthenticated") {
            const api = create({
                baseURL: `${baseUrl}`,
                headers: {
                  Accept: "application/json",
                  "Authorization": `Bearer ${props.token}`
                }
            });
            api.get('/api/products').then(response => {
                setProducts(response.data)
            }).catch(err => console.log(err));
        }
    });
    
    const renderStar = (starCount) => {
        let container = [];
        for (let i = 0; i < starCount; i++) {
         container.push(
            <Icon
                key={i}
                name={'star'}
                size={12}
                type="AntDesign"
                color={'#8B8000'}
            />
         );  
        }

        return container;
    }

    const renderProducts = (products) => {
        return (
            products.map((product, i) => {
                return (
                    <View style={styles.itemProduct}>
                        <View style={styles.productCard}>

                            {product.out_of_stock ? <Text style={styles.textOutOfStock}>Out of stock</Text> : null} 
                            
                            <View style={[styles.circleToolbar, styles.iconFav]}>
                                <Heart 
                                    width={20} 
                                    height={20} 
                                    stroke='red' 
                                    fill={product.isFav ? 'red' : 'white'}
                                />
                            </View>

                            <Image source={{uri: product.image}} style={{width: 100, height: 100, alignSelf: 'center'}}/>
                            
                            <Text style={{
                                fontWeight: 'bold', 
                                fontSize: 12
                            }}>{product.name}</Text>

                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 5
                            }}>{renderStar(product.rating)}</View>

                            <Text style={styles.textPrice}>{product.price}</Text>
                            <Text style={styles.textPriceOff}>{product.off}</Text>
                        </View>
                    </View>
                );
            })
        );
    }


    return (
        <View style={styles.productView}>
            {products.length > 0 && products[0] instanceof ({}).constructor ? renderProducts(products) : null}
        </View>
    );
}

export default TampilanProduk;
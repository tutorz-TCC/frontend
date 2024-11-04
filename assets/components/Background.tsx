import React, { ReactNode } from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'
import defaultStyles from '../../styles/defaultStyles'

interface props {
	children:ReactNode
}

const Background = ({children}:props) => {
	const largura = useWindowDimensions().width
	return (
		<View style={{
			display: "flex",
			flex: 1,
			alignItems: "center",
			justifyContent:"flex-end"
		}}>
			<View style={[elipsis.forma_oval, defaultStyles.azul_noturno, { width: largura / 2, height: largura / 2, top: -largura / 16, borderTopLeftRadius: 0, borderTopRightRadius: 0}]}></View>
			<View style={[elipsis.forma_oval, defaultStyles.azul_celeste, { width: largura / 2, height: largura / 2, right: -largura/4, top:120}]}></View>
			<View style={[elipsis.forma_oval, defaultStyles.azul_marinho, { width: largura / 2, height: largura / 2, left: - largura/8, top:60}]}></View>
			<View style={[elipsis.forma_oval, defaultStyles.azul_real, { width: largura / 2, height: largura / 2, top: 30, right:-largura/8}]}></View>
			{children}
		</View>
	)
}

const elipsis = StyleSheet.create({
	//formas geométricas estilizadas
	forma_oval: {
		transform: [{ scaleX: 2 }],
		borderRadius: 999999999,
		position: "absolute",
		top: 0
	}
})

export default Background

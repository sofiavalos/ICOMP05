import React from "react";
import { MarkerType } from "react-flow-renderer";

export const year_labels = [
	{
		id: "cineu",
		type: "year",
		data: {
			label: <>CINEU</>,
		},
		position: { x: 100, y: 0 },
	},
	{
		id: "a1",
		type: "year",
		data: {
			label: <>1° Año</>,
		},
		position: { x: 500, y: 0 },
	},
	{
		id: "a2",
		type: "year",
		data: {
			label: <>2° Año</>,
		},
		position: { x: 900, y: 0 },
	},
	{
		id: "a3",
		type: "year",
		data: {
			label: <>3° Año</>,
		},
		position: { x: 1300, y: 0 },
	},
	{
		id: "a4",
		type: "year",
		data: {
			label: <>4° Año</>,
		},
		position: { x: 1700, y: 0 },
	},
	{
		id: "a5",
		type: "year",
		data: {
			label: <>5° Año</>,
		},
		position: { x: 2100, y: 0 },
	},
];

export const nodes = [
	/* CINEU */
	{
		id: "cineu-1",
		type: "course",
		targetPosition: "right",
		data: {
			year: "cineu",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "#D9B600",
			disabled_background: "#cda479",
			done: false,
			label: <>Matemática</>,
		},
		position: { x: 0, y: 100 },
	},
	{
		id: "cineu-2",
		type: "course",
		targetPosition: "right",
		data: {
			year: "cineu",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "#D9B600",
			disabled_background: "#cda479",
			done: false,
			label: <>Física</>,
		},
		position: { x: 0, y: 200 },
	},
	{
		id: "cineu-3",
		type: "course",
		targetPosition: "right",
		data: {
			year: "cineu",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "#D9B600",
			disabled_background: "#cda479",
			done: false,
			label: <>Ambientación universitaria</>,
		},
		position: { x: 0, y: 300 },
	},
	/* Carrera */
	{
		id: "1",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Introducción a la Matemática</>,
		},
		position: { x: 400, y: 100 },
	},
	{
		id: "2",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Introducción a la Ingeniería</>,
		},
		position: { x: 400, y: 200 },
	},
	{
		id: "3",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Química Aplicada</>,
		},
		position: { x: 400, y: 300 },
	},
	{
		id: "4",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Representación Gráfica</>,
		},
		position: { x: 400, y: 400 },
	},
	{
		id: "5",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Análisis Matemático I</>,
		},
		position: { x: 600, y: 100 },
	},
	{
		id: "6",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Física I</>,
		},
		position: { x: 600, y: 200 },
	},
	{
		id: "7",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Informática</>,
		},
		position: { x: 600, y: 300 },
	},
	{
		id: "8",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Taller y Laboratorio</>,
		},
		position: { x: 600, y: 400 },
	},
	{
		id: "9",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Álgebra Lineal</>,
		},
		position: { x: 600, y: 500 },
	},
	{
		id: "10",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Probabilidad y Estadística</>,
		},
		position: { x: 800, y: 100 },
	},
	{
		id: "11",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Métodos Númericos</>,
		},
		position: { x: 800, y: 200 },
	},
	{
		id: "12",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Análisis Matemático II</>,
		},
		position: { x: 800, y: 300 },
	},
	{
		id: "13",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Física II</>,
		},
		position: { x: 800, y: 400 },
	},
	{
		id: "14",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Informática Avanzada</>,
		},
		position: { x: 800, y: 500 },
	},
	{
		id: "15",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Análisis Matemático III</>,
		},
		position: { x: 1000, y: 100 },
	},
	{
		id: "16",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Física III</>,
		},
		position: { x: 1000, y: 200 },
	},
	{
		id: "17",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Electrónica</>,
		},
		position: { x: 1000, y: 300 },
	},
	{
		id: "18",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Teoría de Señales y Sistemas Lineales</>,
		},
		position: { x: 1000, y: 400 },
	},
	{
		id: "40",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Teoría de Redes</>,
		},
		position: { x: 1200, y: 100 },
	},
	{
		id: "19",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Economía</>,
		},
		position: { x: 1200, y: 200 },
	},
	{
		id: "20",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Electrónica Digital I</>,
		},
		position: { x: 1200, y: 300 },
	},
	{
		id: "21",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Algoritmos y Estructuras de Datos</>,
		},
		position: { x: 1200, y: 400 },
	},
	{
		id: "22",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Sistemas de Control I</>,
		},
		position: { x: 1400, y: 100 },
	},
	{
		id: "23",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Teoría de las Comunicaciones</>,
		},
		position: { x: 1400, y: 200 },
	},
	{
		id: "24",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Modelos y Simulación</>,
		},
		position: { x: 1400, y: 300 },
	},
	{
		id: "25",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Gestión de las Organizaiones Industriales</>,
		},
		position: { x: 1200, y: 400 },
	},
	{
		id: "26",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Módulo de Inglés</>,
		},
		position: { x: 1400, y: 500 },
	},
	{
		id: "27",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a4",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Comunicaciones Digitales</>,
		},
		position: { x: 1600, y: 100 },
	},
	{
		id: "28",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a4",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Programación Concurrente</>,
		},
		position: { x: 1600, y: 200 },
	},
	{
		id: "29",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a4",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Ingeniería de Software</>,
		},
		position: { x: 1600, y: 300 },
	},
	{
		id: "30",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a4",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Electrónica Digital II</>,
		},
		position: { x: 1600, y: 400 },
	},
	{
		id: "31",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a4",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Comprensión y Traducción del Inglés</>,
		},
		position: { x: 1600, y: 500 },
	},
	{
		id: "32",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a4",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Comunicaciones de Datos</>,
		},
		position: { x: 1800, y: 100 },
	},
	{
		id: "33",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a4",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Seguridad e Higiene Industrial y Ambiental</>,
		},
		position: { x: 1800, y: 200 },
	},
	{
		id: "34",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a4",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Sistemas Operativos I</>,
		},
		position: { x: 1800, y: 300 },
	},
	{
		id: "35",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a4",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Electrónica Digital III</>,
		},
		position: { x: 600, y: 100 },
	},
	{
		id: "36",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a5",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Sistemas de Computación</>,
		},
		position: { x: 2000, y: 100 },
	},
	{
		id: "37",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a5",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Redes de Computadoras</>,
		},
		position: { x: 2000, y: 200 },
	},
	{
		id: "38",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a5",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Sistemas Operativos II</>,
		},
		position: { x: 2000, y: 300 },
	},
	{
		id: "39",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a5",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Arquitectura de Computadoras</>,
		},
		position: { x: 2200, y: 100 },
	},
	{
		id: "41",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a5",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Sistemas de Gestión de Bases de Datos</>,
		},
		position: { x: 2000, y: 400 },
	},

];

export const edges = [

	/* Correlativas de Matematica*/
	{ id: "cineu-1-1", source: "cineu-1", target: "1", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "cineu-1-3", source: "cineu-1", target: "3", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "cineu-1-7", source: "cineu-1", target: "7", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "cineu-1-8", source: "cineu-1", target: "8", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Fisica*/
	{ id: "cineu-2-6", source: "cineu-2", target: "6", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Ambientación U*/
	{ id: "cineu-3-2", source: "cineu-3", target: "2", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Intro a la Mate*/
	{ id: "1-5", source: "1", target: "5", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "1-6", source: "1", target: "6", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "1-9", source: "1", target: "9", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Quimica*/
	{ id: "3-16", source: "3", target: "16", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de AM1*/
	{ id: "5-10", source: "5", target: "10", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "5-11", source: "5", target: "11", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "5-12", source: "5", target: "12", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "5-13", source: "5", target: "13", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "5-19", source: "5", target: "19", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de F1*/
	{ id: "6-13", source: "6", target: "13", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "6-16", source: "6", target: "16", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Info*/
	{ id: "7-14", source: "7", target: "14", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "7-30", source: "7", target: "30", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de TyL*/
	{ id: "8-17", source: "8", target: "17", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de PyE*/
	{ id: "10-24", source: "10", target: "24", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Metodos*/
	{ id: "11-21", source: "11", target: "21", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de AM2*/
	{ id: "12-15", source: "12", target: "15", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "12-16", source: "12", target: "16", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "12-18", source: "12", target: "18", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de F2*/
	{ id: "13-17", source: "13", target: "17", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "13-40", source: "13", target: "40", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de AM3*/
	{ id: "15-22", source: "15", target: "22", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de F3*/
	{ id: "16-33", source: "16", target: "33", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Electronica*/
	{ id: "17-20", source: "17", target: "20", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de TSySL*/
	{ id: "18-40", source: "18", target: "40", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Economia*/
	{ id: "19-25", source: "19", target: "25", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de ED1*/
	{ id: "20-30", source: "20", target: "30", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de AyED*/
	{ id: "21-41", source: "21", target: "41", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "29-41", source: "29", target: "41", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Teoria de redes*/
	{ id: "40-22", source: "40", target: "22", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "40-23", source: "40", target: "23", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Sistemas de Control I*/
	{ id: "22-33", source: "22", target: "33", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de TeoCom*/
	{ id: "23-27", source: "23", target: "27", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de MyS*/
	{ id: "24-28", source: "24", target: "28", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Modulo de Ingles*/
	{ id: "26-31", source: "26", target: "31", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de ComDig*/
	{ id: "27-32", source: "27", target: "32", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de ProgConcu*/
	{ id: "28-34", source: "28", target: "34", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de ED3*/
	{ id: "30-35", source: "30", target: "35", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Ingles 2*/
	{ id: "31-35", source: "31", target: "35", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de ComDatos*/
	{ id: "32-37", source: "32", target: "37", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de SO1*/
	{ id: "34-37", source: "34", target: "37", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "34-38", source: "34", target: "38", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de ED3*/
	{ id: "35-36", source: "35", target: "36", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de SistCom*/
	{ id: "36-39", source: "36", target: "39", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Ing Software*/
	{ id: "29-38", source: "29", target: "38", markerEnd: { type: MarkerType.ArrowClosed } },
]
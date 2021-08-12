import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Router } from "next/dist/client/router";
import HomePage from "../components/homePage/homePage";

export default function Home() {
  return <HomePage />;
}

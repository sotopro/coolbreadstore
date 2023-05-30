import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  content: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    paddingVertical: 8,
  },
  input: {
    height: 45,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Inter-Regular",
    marginBottom: 5,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  link: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    textAlign: "center",
  },
  linkText: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    borderBottomColor: "#0582CA",
    borderBottomWidth: 1,
    color: "#0582CA",
    textAlign: "center",
  },
  submitContainer: {
    paddingVertical: 5,
  },
});

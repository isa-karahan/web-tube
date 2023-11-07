import { useContext } from "react";
import { SidebarContext } from ".";


export function useSidebarContext() {
  const value = useContext(SidebarContext);
  if (value == null) throw Error("Cannot use outside of SidebarProvider");

  return value;
}

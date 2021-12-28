import useAuthContext from "../../../context/auth/AuthContext";
import useUiContext from "../../../context/ui/UiContext";

const useDashboardHeader = () => {
	const { user } = useAuthContext();
	const { showSideMenu, hideSideMenu, isSideMenuVisible } = useUiContext();

	const handleSideMenuVisibility = () => {
		if (isSideMenuVisible) {
			hideSideMenu();
		} else {
			showSideMenu();
		}
	};

	return {
		user,
		handleSideMenuVisibility,
	};
};

export default useDashboardHeader;

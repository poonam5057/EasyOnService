import { apiClient, allApi } from 'app/services/client';
export default function changePasswordData(
    currentPassword: string,
    newPassword: string,
    confirmPassword: string,
) {
    return apiClient.post(allApi.CHANGEPASSWORD, {
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
    });
}

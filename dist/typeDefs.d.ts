export type CallbackDoc = {
    downloadUrl?: string;
    uploadState?: string;
    description: string;
    driveSuccess: boolean;
    embedUrl: string;
    iconUrl: string;
    id: string;
    isShared: boolean;
    lastEditedUtc: number;
    mimeType: string;
    name: string;
    rotation: number;
    rotationDegree: number;
    serviceId: string;
    sizeBytes: number;
    type: string;
    url: string;
};
export type PickerCallback = {
    action: string;
    docs: CallbackDoc[];
    token?: any;
};
export type authResult = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    authuser: string;
    prompt: string;
};
type ViewIdOptions = 'DOCS' | 'DOCS_IMAGES' | 'DOCS_IMAGES_AND_VIDEOS' | 'DOCS_VIDEOS' | 'DOCUMENTS' | 'DRAWINGS' | 'FOLDERS' | 'FORMS' | 'PDFS' | 'SPREADSHEETS' | 'PRESENTATIONS';
export type PickerConfiguration = {
    clientId: string;
    developerKey: string;
    viewId?: ViewIdOptions;
    viewMimeTypes?: string;
    setIncludeFolders?: boolean;
    setSelectFolderEnabled?: boolean;
    disableDefaultView?: boolean;
    token?: string;
    setOrigin?: string;
    multiselect?: boolean;
    disabled?: boolean;
    appId?: string;
    supportDrives?: boolean;
    showUploadView?: boolean;
    showUploadFolders?: boolean;
    setParentFolder?: string;
    customViews?: any[];
    locale?: string;
    customScopes?: string[];
    callbackFunction: (data: PickerCallback) => any;
};
export declare const defaultConfiguration: PickerConfiguration;
export {};
//# sourceMappingURL=typeDefs.d.ts.map
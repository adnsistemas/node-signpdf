export function pdflibAddPlaceholder({ pdfDoc, pdfPage, reason, contactInfo, name, location, signingTime, signatureLength, byteRangePlaceholder, subFilter, widgetRect, appName, widgetName, signDescription, visualRepresentation, }: InputType): void;
export type PDFDocument = import('@adnsistemas/pdf-lib').PDFDocument;
export type PDFPage = import('@adnsistemas/pdf-lib').PDFPage;
export type PDFContentStream = import('@adnsistemas/pdf-lib').PDFContentStream;
export type CommonInputType = {
    pdfDoc?: PDFDocument;
    /**
     * If not provided, last page is used
     */
    pdfPage?: PDFPage;
    reason: string;
    contactInfo: string;
    name: string;
    location: string;
    signingTime?: Date;
    signatureLength?: number;
    byteRangePlaceholder?: string;
    /**
     * One of SUBFILTER_* from \@signpdf/utils
     */
    subFilter?: string;
    /**
     * [x1, y1, x2, y2] widget rectangle
     */
    widgetRect?: number[];
    /**
     * Name of the application generating the signature
     */
    appName?: string;
    /**
     * Name to use for the Widget representing the signature,
     * 'Signature1' if not specified
     */
    widgetName?: string;
    /**
     * Descriptive text to show for widget on visualization,
     * instead of widgetName
     */
    signDescription?: string;
    /**
     * Visual presentation of the signature
     * when widgetRect is provided
     */
    visualRepresentation?: PDFContentStream;
};
export type DocInputType = {
    pdfDoc: PDFDocument;
};
export type PageInputType = {
    pdfPage: PDFPage;
};
export type InputType = CommonInputType & (DocInputType | PageInputType);
//# sourceMappingURL=pdflibAddPlaceholder.d.ts.map
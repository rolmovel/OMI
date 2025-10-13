function generateBrochure() {
    const { jsPDF } = window.jspdf;
    const content = document.querySelector('body'); // Por ahora, capturamos todo el body

    // Ocultar el botón de descarga para que no aparezca en el PDF
    const downloadButton = document.querySelector('button.border-2');
    if (downloadButton) {
        downloadButton.style.display = 'none';
    }

    html2canvas(content, {
        scale: 2, // Mejorar la calidad de la imagen
        useCORS: true,
        backgroundColor: null // Usar el fondo del elemento
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const ratio = canvasWidth / canvasHeight;
        const width = pdfWidth;
        const height = width / ratio;

        let position = 0;
        let heightLeft = height;

        pdf.addImage(imgData, 'PNG', 0, position, width, height);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
            position = heightLeft - height;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, width, height);
            heightLeft -= pdfHeight;
        }

        pdf.save('brochure-hesi-re.pdf');

        // Volver a mostrar el botón de descarga
        if (downloadButton) {
            downloadButton.style.display = 'block';
        }
    });
}

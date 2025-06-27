export interface ThreadBrand {
  id: string;
  name: string;
  colorCount: number;
  colors: ThreadColor[];
}

export interface ThreadColor {
  id: string;
  name: string;
  code: string;
  hex: string;
}

export const threadBrands: ThreadBrand[] = [
  {
    id: 'dmc',
    name: 'DMC Cotton',
    colorCount: 50,
    colors: [
      { id: 'dmc-001', name: 'White', code: 'B5200', hex: '#FFFFFF' },
      { id: 'dmc-002', name: 'Snow White', code: 'White', hex: '#FEFEFE' },
      { id: 'dmc-003', name: 'Ecru', code: 'Ecru', hex: '#F4F0DB' },
      { id: 'dmc-004', name: 'Light Pink', code: '818', hex: '#FFD7E5' },
      { id: 'dmc-005', name: 'Pink', code: '963', hex: '#FFCCCB' },
      { id: 'dmc-006', name: 'Deep Pink', code: '3716', hex: '#FFC0CB' },
      { id: 'dmc-007', name: 'Rose', code: '3326', hex: '#FF69B4' },
      { id: 'dmc-008', name: 'Red', code: '666', hex: '#DC143C' },
      { id: 'dmc-009', name: 'Dark Red', code: '815', hex: '#8B0000' },
      { id: 'dmc-010', name: 'Coral', code: '3706', hex: '#FF7F50' },
      { id: 'dmc-011', name: 'Orange', code: '608', hex: '#FFA500' },
      { id: 'dmc-012', name: 'Light Orange', code: '3825', hex: '#FFB347' },
      { id: 'dmc-013', name: 'Yellow', code: '743', hex: '#FFD700' },
      { id: 'dmc-014', name: 'Light Yellow', code: '744', hex: '#FFFFE0' },
      { id: 'dmc-015', name: 'Gold', code: '783', hex: '#DAA520' },
      { id: 'dmc-016', name: 'Light Green', code: '3348', hex: '#90EE90' },
      { id: 'dmc-017', name: 'Green', code: '702', hex: '#228B22' },
      { id: 'dmc-018', name: 'Dark Green', code: '3345', hex: '#006400' },
      { id: 'dmc-019', name: 'Mint', code: '913', hex: '#98FB98' },
      { id: 'dmc-020', name: 'Teal', code: '943', hex: '#008080' },
      { id: 'dmc-021', name: 'Light Blue', code: '3325', hex: '#ADD8E6' },
      { id: 'dmc-022', name: 'Blue', code: '797', hex: '#0000FF' },
      { id: 'dmc-023', name: 'Dark Blue', code: '336', hex: '#000080' },
      { id: 'dmc-024', name: 'Navy', code: '823', hex: '#191970' },
      { id: 'dmc-025', name: 'Sky Blue', code: '519', hex: '#87CEEB' },
      { id: 'dmc-026', name: 'Purple', code: '327', hex: '#800080' },
      { id: 'dmc-027', name: 'Light Purple', code: '3747', hex: '#DDA0DD' },
      { id: 'dmc-028', name: 'Violet', code: '550', hex: '#8A2BE2' },
      { id: 'dmc-029', name: 'Lavender', code: '3609', hex: '#E6E6FA' },
      { id: 'dmc-030', name: 'Brown', code: '433', hex: '#8B4513' },
      { id: 'dmc-031', name: 'Light Brown', code: '434', hex: '#D2B48C' },
      { id: 'dmc-032', name: 'Dark Brown', code: '801', hex: '#654321' },
      { id: 'dmc-033', name: 'Tan', code: '738', hex: '#D2B48C' },
      { id: 'dmc-034', name: 'Beige', code: '822', hex: '#F5F5DC' },
      { id: 'dmc-035', name: 'Gray', code: '318', hex: '#808080' },
      { id: 'dmc-036', name: 'Light Gray', code: '762', hex: '#D3D3D3' },
      { id: 'dmc-037', name: 'Dark Gray', code: '413', hex: '#696969' },
      { id: 'dmc-038', name: 'Black', code: '310', hex: '#000000' },
      { id: 'dmc-039', name: 'Cream', code: '712', hex: '#FFF8DC' },
      { id: 'dmc-040', name: 'Peach', code: '948', hex: '#FFCBA4' },
      { id: 'dmc-041', name: 'Salmon', code: '761', hex: '#FA8072' },
      { id: 'dmc-042', name: 'Turquoise', code: '807', hex: '#40E0D0' },
      { id: 'dmc-043', name: 'Aqua', code: '959', hex: '#00FFFF' },
      { id: 'dmc-044', name: 'Lime', code: '704', hex: '#32CD32' },
      { id: 'dmc-045', name: 'Olive', code: '733', hex: '#808000' },
      { id: 'dmc-046', name: 'Burgundy', code: '814', hex: '#800020' },
      { id: 'dmc-047', name: 'Maroon', code: '221', hex: '#800000' },
      { id: 'dmc-048', name: 'Plum', code: '718', hex: '#DDA0DD' },
      { id: 'dmc-049', name: 'Magenta', code: '600', hex: '#FF00FF' },
      { id: 'dmc-050', name: 'Silver', code: '762', hex: '#C0C0C0' },
    ],
  },
  {
    id: 'anchor',
    name: 'Anchor Pearl Cotton',
    colorCount: 40,
    colors: [
      { id: 'anchor-001', name: 'White', code: '1', hex: '#FFFFFF' },
      { id: 'anchor-002', name: 'Ecru', code: '926', hex: '#F4F0DB' },
      { id: 'anchor-003', name: 'Pink', code: '50', hex: '#FFB6C1' },
      { id: 'anchor-004', name: 'Rose', code: '57', hex: '#FF69B4' },
      { id: 'anchor-005', name: 'Red', code: '47', hex: '#DC143C' },
      { id: 'anchor-006', name: 'Coral', code: '316', hex: '#FF7F50' },
      { id: 'anchor-007', name: 'Orange', code: '324', hex: '#FFA500' },
      { id: 'anchor-008', name: 'Yellow', code: '305', hex: '#FFD700' },
      { id: 'anchor-009', name: 'Gold', code: '307', hex: '#DAA520' },
      { id: 'anchor-010', name: 'Light Green', code: '253', hex: '#90EE90' },
      { id: 'anchor-011', name: 'Green', code: '244', hex: '#228B22' },
      { id: 'anchor-012', name: 'Dark Green', code: '246', hex: '#006400' },
      { id: 'anchor-013', name: 'Teal', code: '169', hex: '#008080' },
      { id: 'anchor-014', name: 'Light Blue', code: '128', hex: '#ADD8E6' },
      { id: 'anchor-015', name: 'Blue', code: '132', hex: '#0000FF' },
      { id: 'anchor-016', name: 'Navy', code: '134', hex: '#000080' },
      { id: 'anchor-017', name: 'Purple', code: '100', hex: '#800080' },
      { id: 'anchor-018', name: 'Lavender', code: '98', hex: '#E6E6FA' },
      { id: 'anchor-019', name: 'Violet', code: '101', hex: '#8A2BE2' },
      { id: 'anchor-020', name: 'Brown', code: '359', hex: '#8B4513' },
      { id: 'anchor-021', name: 'Light Brown', code: '361', hex: '#D2B48C' },
      { id: 'anchor-022', name: 'Dark Brown', code: '357', hex: '#654321' },
      { id: 'anchor-023', name: 'Tan', code: '347', hex: '#D2B48C' },
      { id: 'anchor-024', name: 'Beige', code: '830', hex: '#F5F5DC' },
      { id: 'anchor-025', name: 'Gray', code: '234', hex: '#808080' },
      { id: 'anchor-026', name: 'Light Gray', code: '397', hex: '#D3D3D3' },
      { id: 'anchor-027', name: 'Dark Gray', code: '236', hex: '#696969' },
      { id: 'anchor-028', name: 'Black', code: '403', hex: '#000000' },
      { id: 'anchor-029', name: 'Cream', code: '275', hex: '#FFF8DC' },
      { id: 'anchor-030', name: 'Peach', code: '8', hex: '#FFCBA4' },
      { id: 'anchor-031', name: 'Salmon', code: '11', hex: '#FA8072' },
      { id: 'anchor-032', name: 'Turquoise', code: '175', hex: '#40E0D0' },
      { id: 'anchor-033', name: 'Aqua', code: '185', hex: '#00FFFF' },
      { id: 'anchor-034', name: 'Lime', code: '255', hex: '#32CD32' },
      { id: 'anchor-035', name: 'Olive', code: '278', hex: '#808000' },
      { id: 'anchor-036', name: 'Burgundy', code: '22', hex: '#800020' },
      { id: 'anchor-037', name: 'Maroon', code: '20', hex: '#800000' },
      { id: 'anchor-038', name: 'Plum', code: '89', hex: '#DDA0DD' },
      { id: 'anchor-039', name: 'Magenta', code: '86', hex: '#FF00FF' },
      { id: 'anchor-040', name: 'Silver', code: '234', hex: '#C0C0C0' },
    ],
  },
  {
    id: 'madeira',
    name: 'Madeira Rayon',
    colorCount: 35,
    colors: [
      { id: 'madeira-001', name: 'White', code: '1001', hex: '#FFFFFF' },
      { id: 'madeira-002', name: 'Ecru', code: '1002', hex: '#F4F0DB' },
      { id: 'madeira-003', name: 'Pink', code: '1114', hex: '#FFB6C1' },
      { id: 'madeira-004', name: 'Rose', code: '1147', hex: '#FF69B4' },
      { id: 'madeira-005', name: 'Red', code: '1147', hex: '#DC143C' },
      { id: 'madeira-006', name: 'Orange', code: '1030', hex: '#FFA500' },
      { id: 'madeira-007', name: 'Yellow', code: '1016', hex: '#FFD700' },
      { id: 'madeira-008', name: 'Gold', code: '1023', hex: '#DAA520' },
      { id: 'madeira-009', name: 'Light Green', code: '1051', hex: '#90EE90' },
      { id: 'madeira-010', name: 'Green', code: '1304', hex: '#228B22' },
      { id: 'madeira-011', name: 'Dark Green', code: '1307', hex: '#006400' },
      { id: 'madeira-012', name: 'Teal', code: '1068', hex: '#008080' },
      { id: 'madeira-013', name: 'Light Blue', code: '1104', hex: '#ADD8E6' },
      { id: 'madeira-014', name: 'Blue', code: '1082', hex: '#0000FF' },
      { id: 'madeira-015', name: 'Navy', code: '1085', hex: '#000080' },
      { id: 'madeira-016', name: 'Purple', code: '1243', hex: '#800080' },
      { id: 'madeira-017', name: 'Lavender', code: '1112', hex: '#E6E6FA' },
      { id: 'madeira-018', name: 'Violet', code: '1245', hex: '#8A2BE2' },
      { id: 'madeira-019', name: 'Brown', code: '1140', hex: '#8B4513' },
      { id: 'madeira-020', name: 'Light Brown', code: '1142', hex: '#D2B48C' },
      { id: 'madeira-021', name: 'Dark Brown', code: '1138', hex: '#654321' },
      { id: 'madeira-022', name: 'Tan', code: '1054', hex: '#D2B48C' },
      { id: 'madeira-023', name: 'Beige', code: '1003', hex: '#F5F5DC' },
      { id: 'madeira-024', name: 'Gray', code: '1176', hex: '#808080' },
      { id: 'madeira-025', name: 'Light Gray', code: '1171', hex: '#D3D3D3' },
      { id: 'madeira-026', name: 'Dark Gray', code: '1178', hex: '#696969' },
      { id: 'madeira-027', name: 'Black', code: '1000', hex: '#000000' },
      { id: 'madeira-028', name: 'Cream', code: '1009', hex: '#FFF8DC' },
      { id: 'madeira-029', name: 'Peach', code: '1016', hex: '#FFCBA4' },
      { id: 'madeira-030', name: 'Salmon', code: '1147', hex: '#FA8072' },
      { id: 'madeira-031', name: 'Turquoise', code: '1068', hex: '#40E0D0' },
      { id: 'madeira-032', name: 'Aqua', code: '1104', hex: '#00FFFF' },
      { id: 'madeira-033', name: 'Lime', code: '1304', hex: '#32CD32' },
      { id: 'madeira-034', name: 'Olive', code: '1051', hex: '#808000' },
      { id: 'madeira-035', name: 'Silver', code: '1171', hex: '#C0C0C0' },
    ],
  },
  {
    id: 'lizbeth',
    name: 'Lizbeth Tatting Thread',
    colorCount: 30,
    colors: [
      { id: 'lizbeth-001', name: 'White', code: '601', hex: '#FFFFFF' },
      { id: 'lizbeth-002', name: 'Ecru', code: '603', hex: '#F4F0DB' },
      { id: 'lizbeth-003', name: 'Pink', code: '604', hex: '#FFB6C1' },
      { id: 'lizbeth-004', name: 'Rose', code: '605', hex: '#FF69B4' },
      { id: 'lizbeth-005', name: 'Red', code: '671', hex: '#DC143C' },
      { id: 'lizbeth-006', name: 'Orange', code: '608', hex: '#FFA500' },
      { id: 'lizbeth-007', name: 'Yellow', code: '693', hex: '#FFD700' },
      { id: 'lizbeth-008', name: 'Gold', code: '695', hex: '#DAA520' },
      { id: 'lizbeth-009', name: 'Light Green', code: '622', hex: '#90EE90' },
      { id: 'lizbeth-010', name: 'Green', code: '684', hex: '#228B22' },
      { id: 'lizbeth-011', name: 'Dark Green', code: '686', hex: '#006400' },
      { id: 'lizbeth-012', name: 'Teal', code: '641', hex: '#008080' },
      { id: 'lizbeth-013', name: 'Light Blue', code: '661', hex: '#ADD8E6' },
      { id: 'lizbeth-014', name: 'Blue', code: '663', hex: '#0000FF' },
      { id: 'lizbeth-015', name: 'Navy', code: '665', hex: '#000080' },
      { id: 'lizbeth-016', name: 'Purple', code: '642', hex: '#800080' },
      { id: 'lizbeth-017', name: 'Lavender', code: '644', hex: '#E6E6FA' },
      { id: 'lizbeth-018', name: 'Violet', code: '646', hex: '#8A2BE2' },
      { id: 'lizbeth-019', name: 'Brown', code: '609', hex: '#8B4513' },
      { id: 'lizbeth-020', name: 'Light Brown', code: '611', hex: '#D2B48C' },
      { id: 'lizbeth-021', name: 'Dark Brown', code: '607', hex: '#654321' },
      { id: 'lizbeth-022', name: 'Tan', code: '613', hex: '#D2B48C' },
      { id: 'lizbeth-023', name: 'Beige', code: '615', hex: '#F5F5DC' },
      { id: 'lizbeth-024', name: 'Gray', code: '601', hex: '#808080' },
      { id: 'lizbeth-025', name: 'Light Gray', code: '603', hex: '#D3D3D3' },
      { id: 'lizbeth-026', name: 'Dark Gray', code: '605', hex: '#696969' },
      { id: 'lizbeth-027', name: 'Black', code: '602', hex: '#000000' },
      { id: 'lizbeth-028', name: 'Cream', code: '617', hex: '#FFF8DC' },
      { id: 'lizbeth-029', name: 'Peach', code: '619', hex: '#FFCBA4' },
      { id: 'lizbeth-030', name: 'Salmon', code: '621', hex: '#FA8072' },
    ],
  },
];

export interface DoilyPattern {
  id: string;
  name: string;
  rows: number;
  elements: ('rings' | 'chains')[];
  svgPath: string;
}

export interface RowColorSelection {
  rowNumber: number;
  elementType: 'rings' | 'chains';
  colorId: string;
}

export interface ColorBuilderState {
  selectedPattern: string | null;
  selectedBrand: string | null;
  selectedRow: number;
  selectedElement: 'rings' | 'chains';
  rowColors: Record<string, string>; // key: "row-element", value: colorId
}

export const defaultColorBuilderState: ColorBuilderState = {
  selectedPattern: null,
  selectedBrand: null,
  selectedRow: 1,
  selectedElement: 'rings',
  rowColors: {},
};

export const doilyPatterns: DoilyPattern[] = [
  {
    id: 'square-doily-pattern-1',
    name: 'Square Doily Pattern #1',
    rows: 11,
    elements: ['rings', 'chains'],
    svgPath: '/patterns/square-doily-pattern-1.svg'
  }
];

// Row data for building patterns incrementally
export const rowData = {
  row1: {
    rings: 8,
    chains: 8,
    viewBox: "0 0 928 939"
  },
  row2: {
    rings: 16,
    chains: 16,
    viewBox: "0 0 2090 2088"
  }
};

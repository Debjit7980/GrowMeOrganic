import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Collapse,
    IconButton,
    Checkbox
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
    department: string;
    sub_departments: string[];
}

const departments: Department[] = [
    {
        department: "Human Resources",
        sub_departments: ["Recruitment", "Operations"]
    },
    {
        department: "IT",
        sub_departments: ["Development", "QA"]
    },
    {
        department: "Finance",
        sub_departments: ["Accounts", "Investment"]
    }
];

const DepartmentList: React.FC = () => {
    const [openDepartments, setOpenDepartments] = useState<string[]>([]);
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
    const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);


    const handleToggle = (department: string) => {
        setOpenDepartments((prevOpenDepartments) =>
            prevOpenDepartments.includes(department)
                ? prevOpenDepartments.filter((d) => d !== department)
                : [...prevOpenDepartments, department]
        );
    };

    const handleDepartmentSelect = (department: string, subDepartments: string[]) => {
        if (selectedDepartments.includes(department)) {
            // Unselect department and all sub-departments
            setSelectedDepartments(selectedDepartments.filter((d) => d !== department));
            setSelectedSubDepartments(
                selectedSubDepartments.filter((sd) => !subDepartments.includes(sd))
            );
        } else {
            // Select department and all sub-departments
            setSelectedDepartments([...selectedDepartments, department]);
            setSelectedSubDepartments([...selectedSubDepartments, ...subDepartments]);
        }
    };

    const handleSubDepartmentSelect = (department: string, subDepartment: string) => {
        const departmentSubDepartments = departments.find((d) => d.department === department)?.sub_departments || [];
        if (selectedSubDepartments.includes(subDepartment)) {
            // Unselect sub-department
            setSelectedSubDepartments(selectedSubDepartments.filter((sd) => sd !== subDepartment));
            if (selectedDepartments.includes(department)) {
                setSelectedDepartments(selectedDepartments.filter((d) => d !== department));
            }
        } else {
            // Select sub-department
            setSelectedSubDepartments([...selectedSubDepartments, subDepartment]);
            if (departmentSubDepartments.every((sd) => [...selectedSubDepartments, subDepartment].includes(sd))) {
                setSelectedDepartments([...selectedDepartments, department]);
            }
        }
    };

    return (
        <Container sx={{ marginTop: '8.8rem' }}>
            <Typography variant="h4" component="h2" color='white' gutterBottom>
                Departments
            </Typography>
            <List>
                {departments.map((dept) => (
                    <Box key={dept.department} sx={{ marginBottom: '1rem' }}>
                        <ListItem
                            onClick={() => handleToggle(dept.department)} sx={{
                                width: '35%', color: "#ddd",
                                backgroundColor: "#31363F", 
                                borderRadius: "6px", 
                                '@media (max-width: 600px)': {
                                    width: '80%',
                                },
                            }}>
                            <Checkbox
                                edge="start"
                                sx={{ color: "gray" }}
                                checked={selectedDepartments.includes(dept.department)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDepartmentSelect(dept.department, dept.sub_departments);
                                }}
                            />
                            <ListItemText primary={dept.department} />
                            <IconButton edge="end" sx={{ color: "#ddd" }}>
                                {openDepartments.includes(dept.department) ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </ListItem>

                        <Collapse in={openDepartments.includes(dept.department)} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {dept.sub_departments.map((subDept) => (
                                    <ListItem key={subDept} sx={{ pl: 4, color: "#ddd" }}>
                                        <Checkbox
                                            edge="start"
                                            sx={{ color: "gray" }}
                                            checked={selectedSubDepartments.includes(subDept)}
                                            onClick={() => handleSubDepartmentSelect(dept.department, subDept)}
                                        />
                                        <ListItemText primary={subDept} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    </Box>
                ))}
            </List>
        </Container>
    );
};

export default DepartmentList;

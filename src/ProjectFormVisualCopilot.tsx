import React, { useState } from 'react';

type InputFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    id: string;
};

type DateFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    id: string;
};

type ButtonProps = {
    label: string;
    variant: 'default' | 'outline' | 'primary';
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type ProjectFormProps = {
    showProjectLead: boolean;
    onDelete: (data: ProjectData) => void;
    onReset: (data: ProjectData) => void;
    onSave: (data: ProjectData) => void;
};

type ProjectData = {
    customer: string;
    area: string;
    projectLead: string;
    projectManager: string;
    startDate: string;
    endDate: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, id }) => (
    <div className="flex flex-col flex-1">
        <label htmlFor={id} className="font-semibold leading-6">{label}</label>
        <input
            id={id}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="justify-center px-4 py-2.5 rounded-lg border border-gray-300 border-solid leading-[157%]"
        />
    </div>
);

const DateField: React.FC<DateFieldProps> = ({ label, value, onChange, id }) => (
    <div className="flex flex-col flex-1">
        <label htmlFor={id} className="font-semibold leading-6">{label}</label>
        <div className="flex gap-4 leading-[157%]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/307622daeb014912bc3b1252de4a25a1e815bd1214fde0cf8a1334754c7ab201?apiKey=2087241cfefe41bf89210eb89bfa8bbb&" className="shrink-0 my-auto aspect-[0.9] fill-sky-900 w-[18px]" alt="" />
            <div className="flex flex-col flex-1 justify-center">
                <input
                    id={id}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="justify-center px-4 py-2.5 rounded-lg border border-gray-300 border-solid"
                />
            </div>
        </div>
    </div>
);

const Button: React.FC<ButtonProps> = ({ label, variant, onClick }) => {
    const baseClasses = "flex flex-col justify-center text-xs font-bold tracking-wider leading-5 text-center uppercase";
    const variantClasses = {
        default: "text-zinc-500 bg-zinc-100 rounded-[50px]",
        outline: "text-sky-900 border border-sky-900 border-solid rounded-[50px]",
        primary: "text-white bg-sky-900 rounded-[50px]"
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} px-6 py-4 max-md:px-5`}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {label}
        </button>
    );
};

const ProjectForm: React.FC<ProjectFormProps> = ({ showProjectLead, onDelete, onReset, onSave }) => {
    const [formData, setFormData] = useState<ProjectData>({
        customer: '',
        area: '',
        projectLead: '',
        projectManager: '',
        startDate: '',
        endDate: ''
    });

    const handleInputChange = (field: keyof ProjectData) => (value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <form className="flex flex-col px-6 py-10 text-sm rounded-lg bg-neutral-50 max-w-[800px] max-md:px-5">
            <section className="flex gap-5 text-black whitespace-nowrap max-md:flex-wrap">
                <InputField label="Kunde" value={formData.customer} onChange={handleInputChange('customer')} id="customer" />
                <InputField label="Bereich" value={formData.area} onChange={handleInputChange('area')} id="area" />
            </section>
            <section className="flex gap-5 mt-4 whitespace-nowrap text-slate-900 max-md:flex-wrap">
                {showProjectLead && (
                    <InputField label="Projekt-Leiter" value={formData.projectLead} onChange={handleInputChange('projectLead')} id="projectLead" />
                )}
                <InputField label="Projekt-Manager" value={formData.projectManager} onChange={handleInputChange('projectManager')} id="projectManager" />
            </section>
            <section className="flex gap-5 mt-4 text-black whitespace-nowrap max-md:flex-wrap">
                <DateField label="Start-Datum" value={formData.startDate} onChange={handleInputChange('startDate')} id="startDate" />
                <DateField label="End-Datum" value={formData.endDate} onChange={handleInputChange('endDate')} id="endDate" />
            </section>
            <footer className="flex gap-4 self-end mt-20 max-md:flex-wrap max-md:mt-10">
                <Button label="Projekt löschen" variant="default" onClick={() => onDelete(formData)} />
                <Button label="zurücksetzen" variant="outline" onClick={() => onReset(formData)} />
                <Button label="speichern" variant="primary" onClick={() => onSave(formData)} />
            </footer>
        </form>
    );
};

export default ProjectForm;